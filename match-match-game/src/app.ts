import { AboutGame } from './components/about-game/about-game';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
import { Wrapper } from './components/wrapper/wrapper';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly aboutGame: AboutGame;

  private readonly wrapper: Wrapper;

  private readonly settings: Settings;

  private readonly score: Score;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.aboutGame = new AboutGame();
    this.settings = new Settings();
    this.score = new Score();
    this.wrapper = new Wrapper();
    this.rootElement = rootElement;

    // this.config.category
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0]; // this.config.category
    const images = cat.images.map(name => `${cat.category}/${name}`);
    this.game.newGame(images);
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
    this.header.initButton();
    this.aboutGame.checkValid();
  };

  aboutGamePage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.aboutGame.element);
    this.header.initButton();
  };

  bestScorePage = () => {
    this.wrapper.element.innerHTML = '';
    this.wrapper.element.appendChild(this.score.element);
  };

  /* formRegPage = () => {
    this.rootElement.appendChild(this.cover.element);
    this.rootElement.appendChild(this.formReg.element);
    /* this.formReg.newFormReg();
  };

  formRegClosePage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
  };
  */
}
