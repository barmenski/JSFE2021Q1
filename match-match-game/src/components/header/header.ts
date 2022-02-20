import { BaseComponent } from '../base-component';
import { LogoLink } from '../logo-link/logoLink';
import { NavBar } from '../nav-bar/nav-bar';
import { GameButton } from '../game-btn/game-btn';
import { RegFormMini } from '../reg-form/reg-form-mini';
import { Avatar } from '../avatar/avatar';

import './header.scss';

export class Header extends BaseComponent {
  avatar = new Avatar();

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

  cover: HTMLElement;

  regFormMini = new RegFormMini();

  constructor() {
    super('header', ['header']);
    this.cover = document.createElement('div');
    this.cover.classList.add('cover', 'notVisible');
    this.cover.addEventListener('click', () => {
      document.body.classList.remove('notScrollable');
      this.cover.classList.add('notVisible');
      if (!this.regFormMini.regFormWrapper.classList.contains('notVisible')) {
        this.regFormMini.regFormWrapper.classList.add('notVisible');
      }
    });

    this.element.appendChild(this.logoLink.element);
    this.element.append(this.navBar.list);
    this.element.append(this.gameButton.wrapperBtn);
    this.element.append(this.avatar.avatarWrapper);
    this.element.append(this.cover);
    this.element.append(this.regFormMini.regFormWrapper);
  }
}
