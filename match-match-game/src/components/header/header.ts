import { BaseComponent } from '../base-component';
import './header.scss';
import { Database } from '../database';
import { LogoLink } from '../logo-link/logoLink';
import { NavBar } from '../nav-bar/nav-bar';
import { GameButton } from '../game-btn/game-btn';
import { RegForm } from '../reg-form/reg-form';
import { Avatar } from '../avatar/avatar';

export class Header extends BaseComponent {
  avatar = new Avatar();

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
    {
      ref: '#indexeddb-test',
      styles: ['nav-link__default'],
      text: 'IndexedDB test',
    },
  ]);

  gameButton = new GameButton();

  readonly cover: HTMLElement;

  regForm = new RegForm();

  constructor() {
    super('header', ['header']);

    this.cover = document.createElement('div');
    this.cover.classList.add('cover', 'notVisible');
    this.cover.addEventListener('click', () => {
      document.body.classList.remove('notScrollable');
      this.cover.classList.add('notVisible');
      if (this.regForm.regFormWrapper.classList.contains('notVisible')) {
        this.regForm.regFormWrapper.classList.add('notVisible');
      }
    });

    this.element.appendChild(this.logoLink.element);
    this.element.append(this.navBar.list);
    this.element.append(this.gameButton.wrapperBtn);
    this.element.append(this.avatar.avatar);
    this.element.append(this.cover);
    this.element.append(this.regForm.regFormWrapper);
  }
}
