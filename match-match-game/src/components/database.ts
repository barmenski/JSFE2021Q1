export interface MyRecord {
  FirstName: string;
  LastName: string;
  score: number;
  image: string;
}

export class Database {
  public db!: IDBDatabase;

  init(dbName: string, version?: number) {
    return new Promise(resolve => {
      const openRequest = window.indexedDB.open(dbName, version); // opened DB with name and version. This async request
      openRequest.onupgradeneeded = () => {
        // on the first load page or update version
        const database = openRequest.result;
        const store = database.createObjectStore('players', {
          // make store of objects
          keyPath: 'FirstName',
          autoIncrement: false,
        });
        store.createIndex('FirstName', 'FirstName'); // make index
        this.db = database; // public db get database with store and index
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

  write(objStore: string, data: MyRecord): Promise<MyRecord> {
    return new Promise(() => {
      const transaction = this.db.transaction(objStore, 'readwrite'); // make transaction
      const store = transaction.objectStore(objStore); // extract store of objects to const store
      //let index = store.index('FirstName');
      //const resGetKey = index.getKey(data.FirstName);
      //resGetKey.onsuccess = () => {
      // console.log(resGetKey.result);
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
      // };
      //resGetKey.onerror = () => {
      //   console.log('error', resGetKey.error);
      //  };
    });
  }

  readAll<RecordType>(objStore: string): Promise<Array<RecordType>> {
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

  readLast<RecordType>(objStore: string): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);

      const cursorReq = store.openCursor();
      const allData: Array<RecordType> = [];

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

  readFiltered<RecordType>(objStore: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.index('FirstName').openCursor(null, 'next');
      const resData: Array<RecordType> = [];
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
        resolve(resData);
      };
      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  }
}
