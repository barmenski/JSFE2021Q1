import { AboutGame } from './components/about-game/about-game';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Wrapper } from './components/wrapper/wrapper';
import { ImageCategoryModel } from './models/image-category-model';

const pageElement = document.querySelector('.wrapper');

export class App {
  private readonly header: Header;
  private readonly wrapper: Wrapper;
  private readonly game: Game;
  private readonly aboutGame: AboutGame;


  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.wrapper = new Wrapper();
    this.game = new Game();
    this.aboutGame = new AboutGame;
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.wrapper.element);
    this.wrapper.element.appendChild(this.aboutGame.element);
    //this.wrapper.element.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}

