import { BaseComponent } from '../base-component';
import './header.scss';

export class Header extends BaseComponent {

  constructor () {
    super('header', ['header']);
    this.element.innerHTML = `
    <a href="index.html" class="logo-link"></a>
    <ul class="nav-list">
      <li class="nav-item"><a href="about.html" class="nav-link__about">About Game</a></li>
      <li class="nav-item"><a href="score.html" class="nav-link__score">Best Score</a></li>
      <li class="nav-item"><a href="settings.html" class="nav-link__settings">Game Settings</a></li>
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
