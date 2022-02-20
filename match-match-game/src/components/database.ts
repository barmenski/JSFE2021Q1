import { Player } from './player';

export interface MyRecord {
  FirstName: string;
  LastName: string;
  score: number;
  image: string;
}

export class Database {
  public db!: IDBDatabase;

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
        /*
        const tx = this.db.transaction(['players'], 'readonly');
        const store = tx.objectStore('players');
        const index = store.index('score');
        const req = index.getAll(390);
        req.onsuccess = () => {
          console.log('getAll:', req.result);
        };
        console.log('index:', index);
        */
        resolve(openRequest.result);
      };

      openRequest.onerror = () => {
        // if DB is exist. It executes after refresh page.
        console.log(`Error on init() ${ErrorEvent}`);
      };
    });
  }

  write(objStore: string, data: MyRecord): Promise<MyRecord> {
    return new Promise(() => {
      const transaction = this.db.transaction(objStore, 'readwrite'); // make transaction
      const store = transaction.objectStore(objStore); // extract store of objects to const store
      const result = store.put(data); // if it exist same - it will rewrite

      result.onsuccess = () => {
        console.log('complete', result.result); // result.result = id
      };
      result.onerror = () => {
        console.log('error', result.error);
      };
      transaction.onabort = () => {
        console.log('abort');
      };
    });
  }

  readAll(objStore: string): Promise<Array<MyRecord>> {
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

  readLast(objStore: string): Promise<MyRecord> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);

      const cursorReq = store.openCursor();
      const allData: Array<MyRecord> = [];

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

  readOne(objStore: string, name: string): Promise<MyRecord> {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([objStore], 'readonly');
      const store = tx.objectStore(objStore);
      const req = store.getAll(name);
      req.onsuccess = () => {
        resolve(req.result[0]);
      };
      req.onerror = () => {
        reject(req.error);
      };
    });
  }

  deleteOne(objStore: string, name: string): Promise<String> {
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

  readFiltered(objStore: string): Promise<Array<MyRecord>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.openCursor(null, 'prev');
      const resData: Array<MyRecord> = [];
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
