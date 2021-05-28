import { BaseComponent } from '../base-component';
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
    <a href="#about-game" class="logo-link"></a>
    <ul class="nav-list">
      <li class="nav-item"><a href="#about-game" class="nav-link__about">About Game</a></li>
      <li class="nav-item"><a href="#best-score" class="nav-link__score">Best Score</a></li>
      <li class="nav-item"><a href="#settings" class="nav-link__settings">Game Settings</a></li>
    </ul>
    <div class="wrapper__btn">
      <div class="reg-form">
        <button type="submit" class="reg__btn">REGISTER NEW PLAYER</button>
        <button type="submit" class="start__btn notVisible">START GAME</button>
        <button type="submit" class="stop__btn notVisible">STOP GAME</button>
      </div>
      <div class="avatar__img notVisible"></div>
    </div>
  `;
  }

  initButton = () => {
    const regButton = document.querySelector('.reg__btn') as HTMLElement;
    const cover = document.getElementById('cover') as HTMLElement; // затемнение
    const formReg = document.getElementById('formReg') as HTMLElement; // форма регистрации

    const aboutButton = document.querySelector(
      '.nav-link__about',
    ) as HTMLElement;
    const scoreButton = document.querySelector(
      '.nav-link__score',
    ) as HTMLElement;
    const settingsButton = document.querySelector(
      '.nav-link__settings',
    ) as HTMLElement;

    regButton.addEventListener('click', () => {
      // запускаем форму регистрации
      document.body.classList.add('notScrollable');
      cover.classList.remove('notVisible');
      formReg.classList.remove('notVisible');
    });

    aboutButton.addEventListener('click', () => {
      if (!aboutButton.classList.contains('active')) {
        scoreButton.classList.remove('active');
        settingsButton.classList.remove('active');
        aboutButton.classList.add('active');
      }
    });

    scoreButton.addEventListener('click', () => {
      if (!scoreButton.classList.contains('active')) {
        aboutButton.classList.remove('active');
        settingsButton.classList.remove('active');
        scoreButton.classList.add('active');
      }
    });

    settingsButton.addEventListener('click', () => {
      if (!settingsButton.classList.contains('active')) {
        aboutButton.classList.remove('active');
        scoreButton.classList.remove('active');
        settingsButton.classList.add('active');
      }
    });
  };
}
