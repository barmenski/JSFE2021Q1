import './indexeddb-test.scss';

export class IndexedDbTest {
  public dbTest!: IDBDatabase;

  readonly dbTestWrapper: HTMLElement;

  readonly dbTestAddBtn: HTMLButtonElement;

  readonly dbTestGetBtn: HTMLButtonElement;

  readonly dbTestInput: HTMLInputElement;

  readonly dbTestGetIn: HTMLInputElement;

  readonly dbTestGetOut: HTMLElement;

  constructor() {
    this.dbTestWrapper = document.createElement('div');
    this.dbTestWrapper.className = 'dbtest__wrapper';

    this.dbTestInput = document.createElement('input');
    this.dbTestInput.type = 'text';

    this.dbTestGetIn = document.createElement('input');
    this.dbTestGetIn.type = 'text';

    this.dbTestGetOut = document.createElement('ul');
    this.dbTestGetOut.className = 'dbTest-out';

    this.dbTestAddBtn = document.createElement('button');
    this.dbTestAddBtn.className = 'dbtest__button';
    this.dbTestAddBtn.innerHTML = 'Add note';
    this.dbTestAddBtn.addEventListener('click', () => {
      this.addStickyNote(this.dbTest, this.dbTestInput.value);
    });

    this.dbTestGetBtn = document.createElement('button');
    this.dbTestGetBtn.className = 'dbtest__button';
    this.dbTestGetBtn.innerHTML = 'Get note';
    this.dbTestGetBtn.addEventListener('click', () => {
      this.readStickyNote(this.dbTest, this.dbTestGetIn.value);
    });

    this.dbTestWrapper.append(this.dbTestInput);
    this.dbTestWrapper.append(this.dbTestAddBtn);
    this.dbTestWrapper.append(this.dbTestGetIn);
    this.dbTestWrapper.append(this.dbTestGetBtn);
    this.dbTestWrapper.append(this.dbTestGetOut);
  }

  init(dbName: string, version?: number) {
    const dbReq = indexedDB.open(dbName, version);

    dbReq.onupgradeneeded = () => {
      this.dbTest = dbReq.result;
      this.dbTest.createObjectStore('notes', { autoIncrement: true });
    };
    dbReq.onsuccess = () => {
      this.dbTest = dbReq.result;
    };

    dbReq.onerror = () => {
      console.log(`error opening database${dbReq.error}`);
    };
  }

  addStickyNote(db: IDBDatabase = this.dbTest, message: string) {
    const tx = db.transaction(['notes'], 'readwrite');
    const store = tx.objectStore('notes');

    const note = { text: message, timestamp: Date.now() };
    store.add(note);

    tx.oncomplete = () => {
      console.log(`stored note!${message}`);
    };

    tx.onerror = () => {
      console.log(`error storing note${tx.error}`);
    };
  }

  readStickyNote(db: IDBDatabase, index: string) {
    const tx = db.transaction(['notes'], 'readonly');
    const store = tx.objectStore('notes');

    const req = store.get(Number(index));

    req.onsuccess = () => {
      const note = req.result;

      if (note) {
        const out = document.createElement('li');
        out.innerHTML = `text: ${note.text} timestamp: ${note.timestamp}`;
        this.dbTestGetOut.append(out);
      } else {
        console.log(`note ${index} note found`);
      }
    };

    req.onerror = () => {
      console.log(`error${req.error}`);
    };
  }
}
