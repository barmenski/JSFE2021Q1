class Control {
  public node: HTMLElement;

  constructor(
    parentNode: HTMLElement,
    tagName: string = 'div',
    className: string = '',
    content: string = '',
  ) {
    let el = document.createElement(tagName) as HTMLButtonElement;
    el.className = className;
    el.textContent = content;
    parentNode.appendChild(el);
    this.node = el;
  }
}

class Button extends Control {
  public node!: HTMLButtonElement;
  public onClick!: () => void;

  constructor(parentNode: HTMLElement, caption: string) {
    super(parentNode, 'button', '', caption);
    this.node.onclick = () => {
      this.onClick && this.onClick();
    };
  }
}

interface MyRecord {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id: IDBValidKey;
}

export class Database {
  public db!: IDBDatabase;

  constructor() {}

  init(dbName: string, version?: number) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(dbName, version);
    openRequest.onupgradeneeded = () => {
      let database = openRequest.result;
      let store = database.createObjectStore('players', {
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
    //console.log(this);
  }

  write<RecordType>(collection: string, data: RecordType): Promise<RecordType> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readwrite');
      transaction.oncomplete = () => {
        resolve(transResult);
      };
      let store = transaction.objectStore(collection);
      let res = store.add({});
      let transResult: RecordType;
      res.onsuccess = () => {
        res.result;
        let newRecord: RecordType = { ...data, id: res.result };
        transResult = newRecord;
        /*let result = store.put({
          firstName: 'mike',
          lastName: 'vazovski',
          email: res.result.toString(),
          score: 0,
          id: res.result,
        });*/
        let result = store.put(newRecord);
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
      let transaction = this.db.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.getAll();

      transaction.oncomplete = () => {
        resolve(result.result);
        //console.log(result.result);
      };
      transaction.onerror = () => {
        reject(result.error);
      };
    });
  }

  readFiltered<RecordType>(collection: string): Promise<Array<RecordType>> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(collection, 'readonly');
      let store = transaction.objectStore(collection);
      let result = store.index('score').openCursor(null, 'next');
      let resData: Array<RecordType> = [];
      result.onsuccess = () => {
        let cursor = result.result;
        if (cursor) {
          //console.log(cursor.value);
          if (cursor.value.id) {
            resData.push(cursor.value);
          }
          cursor?.continue();
        }
      };
      transaction.oncomplete = () => {
        resolve(resData);
        //console.log(resData);
      };
    });
  }
}

//setTimeout(() => {
class AppDB {
  public iDB: Database;

  constructor(parentNode: HTMLElement) {
    this.iDB = new Database();
    this.iDB.init('barmenski');

    let readAllButton = new Button(parentNode, 'list');
    readAllButton.onClick = async () => {
      let arr = await this.iDB.readAll<MyRecord>('players');
      //arr[0].lastName;
      console.log(arr);
    };

    let filterButton = new Button(parentNode, 'filtered list');
    filterButton.onClick = async () => {
      //this.iDB.readFiltered();
      let newRec = await this.iDB.write('players', {
        firstName: 'mike',
        lastName: 'vazovski',
        email: '2test@TextDecoderStream.qw',
        score: 0,
        id: 41,
      });
      console.log('--->', newRec);
    };
  }
}

const app = new AppDB(document.body);
//}, 1000);

//2:31:35
