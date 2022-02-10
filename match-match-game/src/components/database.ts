export interface MyRecord {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id: IDBValidKey;
  image: string;
}

export class Database {
  public db!: IDBDatabase;

  init(dbName: string, version?: number) {
    return new Promise(resolve => {
      const openRequest = window.indexedDB.open(dbName, version); //opened DB with name and version. This async request
      openRequest.onupgradeneeded = () => {
        //on the first load page or update version
        const database = openRequest.result;
        const store = database.createObjectStore('players', {
          //make store of objects
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('score', 'score'); //make index
        this.db = database; //public db get database with store and index
      };

      openRequest.onsuccess = () => {
        //if DB is exist. It executes after refresh page.
        this.db = openRequest.result;
        resolve(openRequest.result);
      };

      openRequest.onerror = () => {
        //if DB is exist. It executes after refresh page.
        console.log(`Error on init() ${ErrorEvent}`);
      };
    });
  }

  write<RecordType>(objStore: string, data: RecordType): Promise<RecordType> {
    return new Promise(() => {
      const transaction = this.db.transaction(objStore, 'readwrite'); //make transaction
      const store = transaction.objectStore(objStore); //extract store of objects to const store
      const result = store.put(data); //if it exist same - it will rewrite

      result.onsuccess = () => {
        console.log('complete', result.result); //result.result = id
      };
      result.onerror = () => {
        console.log('error', result.result);
      };
      transaction.onabort = () => {
        console.log('abort');
      };
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

  readFirst<RecordType>(objStore: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.get(1);

      transaction.oncomplete = () => {
        resolve(result.result);
      };
      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readFiltered<RecordType>(objStore: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(objStore, 'readonly');
      const store = transaction.objectStore(objStore);
      const result = store.index('score').openCursor(null, 'next');
      const resData: Array<RecordType> = [];
      result.onsuccess = () => {
        const cursor = result.result;
        if (cursor) {
          // console.log(cursor.value);
          if (cursor.value.id) {
            resData.push(cursor.value);
          }
          cursor?.continue();
        }
      };
      transaction.oncomplete = () => {
        resolve(resData);
        // console.log(resData);
      };
    });
  }
}
