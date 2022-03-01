import { Player } from './player';
import defAva from '../assets/images/avatar.svg';

export class Database {
  public db!: IDBDatabase;

  public defPlayer = new Player(`Player`, `dbEmpty`, 0, `${defAva}`, 0, 8, 5);

  init(dbName: string, version?: number): Promise<IDBDatabase> {
    return new Promise(resolve => {
      const openRequest = window.indexedDB.open(dbName, version); // opened DB with name and version. This async request
      openRequest.onupgradeneeded = () => {
        // on the first load page or update version
        this.db = openRequest.result;
        let store: IDBObjectStore | undefined;
        if (!this.db.objectStoreNames.contains('players')) {
          store = this.db.createObjectStore('players', {
            keyPath: 'FirstName',
            autoIncrement: false,
          });
        } else {
          store = openRequest.transaction?.objectStore('players');
        }

        if (!store?.indexNames.contains('score')) {
          store?.createIndex('score', 'score');
        }
      };

      openRequest.onsuccess = () => {
        // if DB is exist. It executes after refresh page.
        this.db = openRequest.result;
        resolve(openRequest.result);
      };

      openRequest.onerror = () => {
        // if DB is exist. It executes after refresh page.
        console.log(`Error on init() ${ErrorEvent}`);
      };
    });
  }

  write(objStore: string, data: Player): Promise<string> {
    return new Promise(resolve => {
      const transaction = this.db.transaction(objStore, 'readwrite'); // make transaction
      const store = transaction.objectStore(objStore); // extract store of objects to const store
      const result = store.put(data); // if it exist same - it will rewrite

      result.onsuccess = () => {
        console.log('complete', result.result); // result.result = id
        resolve('Done');
      };
      result.onerror = () => {
        console.log('error', result.error);
      };
      transaction.onabort = () => {
        console.log('abort');
      };
    });
  }

  readAll(objStore: string): Promise<Array<Player>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
      };
      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readLast(objStore: string): Promise<Player> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);

      const cursorReq = store.openCursor();
      const allData: Array<Player> = [];

      cursorReq.onsuccess = () => {
        const cursor = cursorReq.result;

        if (cursor != null) {
          allData.push(cursor.value);
          cursor.continue();
        } else {
          resolve(allData[allData.length - 1]);
        }
        cursorReq.onerror = () => {
          reject(cursorReq.error);
        };
      };
    });
  }

  readOne(
    objStore: string,
    name: string | undefined = 'player',
  ): Promise<Player> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([objStore], 'readonly');
      const store = tx.objectStore(objStore);
      const req = store.getAll(name);
      req.onsuccess = () => {
        if (req.result[0] === undefined) {
          resolve(this.defPlayer);
        } else {
          resolve(req.result[0]);
        }
      };
      req.onerror = () => {
        reject(this.defPlayer);
      };
    });
  }

  deleteOne(objStore: string, name: string | undefined = ''): Promise<string> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([objStore], 'readwrite');
      const store = tx.objectStore(objStore);
      const req = store.delete(name);
      req.onsuccess = () => {
        resolve(`Delete ${name} complete!`);
      };
      req.onerror = () => {
        reject(req.error);
      };
    });
  }

  readFiltered(objStore: string): Promise<Array<Player>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.openCursor(null, 'prev');
      const resData: Array<Player> = [];
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          if (cursor.value.FirstName) {
            resData.push(cursor.value);
          }
          cursor?.continue();
        }
      };
      transaction.oncomplete = () => {
        resData.sort((a, b) => (a.score > b.score ? 1 : -1));
        resolve(resData);
      };
      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  }
}
