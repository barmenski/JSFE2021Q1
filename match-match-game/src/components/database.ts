interface MyRecord {
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
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);
    openRequest.onupgradeneeded = () => {
      const database = openRequest.result;
      const store = database.createObjectStore('players', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('score', 'score');
      store.createIndex('email', 'email');
      this.db = database;
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    };
  }

  write<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      let transResult: RecordType;
      const transaction = this.db.transaction(collection, 'readwrite');
      transaction.oncomplete = () => resolve(transResult);

      const store = transaction.objectStore(collection);
      const res = store.add({});

      res.onsuccess = () => {
        const newRecord: RecordType = { ...data, id: res.result };
        transResult = newRecord;
        /* let result = store.put({
          firstName: 'mike',
          lastName: 'vazovski',
          email: res.result.toString(),
          score: 0,
          id: res.result,
        }); */
        const result = store.put(newRecord);
        result.onsuccess = () => {
          console.log('complete', result.result);
        };
        result.onerror = () => {
          console.log('error', result.result);
        };
        transaction.onabort = () => {
          console.log('abort');
        };
      };
    });
  }

  readAll<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(collection, 'readonly');
      const store = transaction.objectStore(collection);
      const result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
        // console.log(result.result);
      };
      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readFiltered<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(collection, 'readonly');
      const store = transaction.objectStore(collection);
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
