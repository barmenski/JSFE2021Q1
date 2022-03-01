import { AboutGame } from './components/about-game/about-game';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { GameButton } from './components/game-btn/game-btn';
import { RegFormMini } from './components/reg-form/reg-form-mini';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
import { Wrapper } from './components/wrapper/wrapper';
import { ImageCategoryModel } from './models/image-category-model';
import { IndexedDbTest } from './components/indexeddb-test/indexeddb-test';

export class App {
  readonly header: Header;

  readonly gameButton: GameButton;

  readonly regFormMini: RegFormMini;

  private readonly game: Game;

  private readonly aboutGame: AboutGame;

  private readonly wrapper: Wrapper;

  readonly settings: Settings;

  private readonly score: Score;

  // readonly database: Database;

  readonly indexedDbTest: IndexedDbTest;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.gameButton = new GameButton();
    this.regFormMini = new RegFormMini();
    this.game = new Game();
    this.aboutGame = new AboutGame();
    this.settings = new Settings();
    this.score = new Score();
    this.wrapper = new Wrapper();
    this.indexedDbTest = new IndexedDbTest();
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
  };

  initPage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.wrapper.element);
    this.wrapper.element.appendChild(this.aboutGame.element);
  };

  aboutGamePage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.aboutGame.element);
  };

  bestScorePage = () => {
    this.wrapper.element.innerHTML = '';
    this.score.reset();
    this.wrapper.element.appendChild(this.score.element);
    this.score.addLine();
  };

  indexedDbPage = () => {
    this.wrapper.element.innerHTML = '';
    const promise = new Promise(() => this.indexedDbTest.init('idb-test', 3));
    promise.then(() =>
      this.indexedDbTest.getAndDisplayNotes(this.indexedDbTest.dbTest),
    );
    this.wrapper.element.appendChild(this.indexedDbTest.dbTestWrapper);
  };
}
