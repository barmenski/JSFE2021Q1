import { AboutGame } from './components/about-game/about-game';
import { Cover } from './components/cover/cover';
import { FormReg } from './components/formReg/formReg';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly aboutGame: AboutGame;

  private readonly cover: Cover;

  private readonly formReg: FormReg;

  private readonly settings: Settings;

  private readonly score: Score;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.aboutGame = new AboutGame();
    this.cover = new Cover();
    this.formReg = new FormReg();
    this.settings = new Settings();
    this.score = new Score();
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
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    window.app.start();
    this.rootElement.appendChild(this.game.element);
  };

  settingsPage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.settings.element);
  };

  aboutGamePage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.aboutGame.element);
  };

  bestScorePage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.score.element);
  };

  formRegPage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.cover.element);
    this.rootElement.appendChild(this.formReg.element);
    /* this.formReg.newFormReg(); */
  };

  formRegClosePage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
  };
}
