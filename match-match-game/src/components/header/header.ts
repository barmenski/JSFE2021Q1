import { BaseComponent } from '../base-component';
import './header.scss';

export class Header extends BaseComponent {

  constructor () {
    super('header', ['header']);
    this.element.innerHTML = `
    <a href="#about-game" class="logo-link"></a>
    <ul class="nav-list">
      <li class="nav-item"><a href="#about-game" class="nav-link__about">About Game</a></li>
      <li class="nav-item"><a href="#best-score" class="nav-link__score">Best Score</a></li>
      <li class="nav-item"><a href="#settings" class="nav-link__settings">Game Settings</a></li>
    </ul>
    <div class="wrapper__btn">
      <form action="#" class="stop-form">
        <button type="submit" class="stop__btn">STOP GAME</button>
      </form>
      <div class="avatar__img"></div>
    </div>
  `;
  }

}
