import { BaseComponent } from '../base-component';
import './header.scss';
import { Database } from '../database';
//import { Player } from '../player';
import { LogoLink } from '../logo-link/logoLink';
import { NavBar } from '../nav-bar/nav-bar';
import { GameButton } from '../game-btn/game-btn';
import { RegForm } from '../reg-form/reg-form';

export class Header extends BaseComponent {
  database = new Database();
  logoLink = new LogoLink();
  navBar = new NavBar([
    {
      ref: '#about-game',
      styles: ['nav-link__about', 'active'],
      text: 'About Game',
    },
    { ref: '#best-score', styles: ['nav-link__score'], text: 'Best Score' },
    {
      ref: '#settings',
      styles: ['nav-link__settings'],
      text: 'Game Settings',
    },
  ]);
  gameButton = new GameButton();
  readonly cover: HTMLElement;
  regForm = new RegForm();
  //player: Player = new Player('', '', '', 0);

  constructor() {
    super('header', ['header']);

    this.cover = document.createElement('div');
    this.cover.classList.add('cover', 'notVisible');
    this.cover.addEventListener('click', () => {
      document.body.classList.remove('notScrollable');
      this.cover.classList.add('notVisible');
      this.regForm.regFormWrapper.classList.contains('notVisible')
        ? ''
        : this.regForm.regFormWrapper.classList.add('notVisible');
    });

    this.element.appendChild(this.logoLink.element);
    this.element.append(this.navBar.list);
    this.element.append(this.gameButton.wrapperBtn);
    this.element.append(this.cover);
    this.element.append(this.regForm.regFormWrapper);
  }
}
