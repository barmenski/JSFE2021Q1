import { AboutGame } from './components/about-game/about-game';
import { Database } from './components/database';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
import { Wrapper } from './components/wrapper/wrapper';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  readonly header: Header;

  private readonly game: Game;

  private readonly aboutGame: AboutGame;

  private readonly wrapper: Wrapper;

  readonly settings: Settings;

  private readonly score: Score;

  readonly database: Database;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.aboutGame = new AboutGame();
    this.settings = new Settings();
    this.score = new Score();
    this.wrapper = new Wrapper();
    this.database = new Database();
    this.rootElement = rootElement;
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[this.settings.categoryCards]; // выбор категории
    const images = cat.images.map(name => `${cat.category}/${name}`);
    const imagesSliced = images.slice(32 - this.settings.amountCards);

    this.game.newGame(imagesSliced);
  }

  gamePage = () => {
    this.wrapper.element.innerHTML = '';
    window.app.start();
    this.wrapper.element.appendChild(this.game.element);
  };

  settingsPage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.settings.element);
    this.settings.initSettings();
  };

  initPage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.wrapper.element);
    this.wrapper.element.appendChild(this.aboutGame.element);
    this.database.init('barmenski', 1);
    this.header.initButton();
    this.header.initPageLink();
    this.header.checkValid();
  };

  aboutGamePage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.aboutGame.element);
  };

  bestScorePage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.score.element);
    this.score.addLine();
  };
}
/*
window.onload = () => {
  database;
};
*/
/*const iDB = window.indexedDB;

let database: IDBDatabase;

const openRequest = iDB.open('barmenski');
openRequest.onupgradeneeded = () => {
  database = openRequest.result;
  const store = database.createObjectStore('players', {
    keyPath: 'id',
    autoIncrement: true,
  });
  store.createIndex('name', 'name', {});
  store.createIndex('email', 'email', { unique: true });
};

openRequest.onsuccess = () => {
  database = openRequest.result;

  const transaction = database.transaction('players', 'readwrite');
  const store = transaction.objectStore('players');
  store.put({
    firstName: 'mike',
    lastName: 'vazovski',
    email: 'mike@mike.mike',
    score: 0,
    id: 3,
  });
  store.put({
    firstName: 'chiki',
    lastName: 'bamboni',
    email: 'me@e.mike',
    score: 100,
    id: 5,
  });
  store.put({
    firstName: 'p',
    lastName: 'bamboni---+',
    email: 'e@e.mike',
    score: 400,
    id: 2,
  });
  transaction.oncomplete = () => {
    // console.log('complete');
  };
  transaction.onerror = () => {
    // console.log('error');
  };
  transaction.onabort = () => {
    // console.log('abort');
  };
};
*/
