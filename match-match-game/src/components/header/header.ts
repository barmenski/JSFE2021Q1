import { BaseComponent } from '../base-component';
import './header.scss';
import { Database } from '../database';
import { Player } from '../player';
import { LogoLink } from '../logo-link/logoLink';
import { NavBar } from '../nav-bar/nav-bar';
import { GameButton } from '../game-btn/game-btn';

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
  player: Player = new Player('', '', '', 0);

  constructor() {
    super('header', ['header']);

    this.cover = document.createElement('div');
    this.cover.classList.add('cover', 'notVisible');
    this.cover.addEventListener('click', () => {
      document.body.classList.remove('notScrollable');
      this.cover.classList.add('notVisible');
    });

    this.element.appendChild(this.logoLink.element);
    this.element.append(this.navBar.list);
    this.element.append(this.gameButton.wrapperBtn);
    this.element.append(this.cover);
    // console.log(this.logoLink.element);
    // this.element.innerHTML = `
    //   <a href="#game" title="Go to game!" class="logo-link"></a>
    //   <ul class="nav-list">
    //     <li class="nav-item"><a href="#about-game" class="nav-link__about active">About Game</a></li>
    //     <li class="nav-item"><a href="#best-score" class="nav-link__score">Best Score</a></li>
    //     <li class="nav-item"><a href="#settings" class="nav-link__settings">Game Settings</a></li>
    //   </ul>
    //   <div class="wrapper__btn">
    //     <div class="game__btn">
    //       <button type="submit" class="reg__btn">REGISTER NEW PLAYER</button>
    //       <button type="submit" class="start__btn notVisible">START GAME</button>
    //       <button type="submit" class="stop__btn notVisible">STOP GAME</button>
    //     </div>
    //     <div class="avatar__img notVisible"></div>
    //   </div>
    //   <div id="cover" class="cover notVisible">
    //   </div>
    //   <div id="formReg" class="formReg notVisible">
    //   <h1 class="heading-form">Registration new Player</h1>
    //   <div class="action">
    //     <div class="input-wrapper">
    //       <div class="input-container">
    //         <input type="text" class="first-name" placeholder="First Name" maxlength="30" required>
    //         <div class="first-name-error"></div>
    //         <div class="validCheck__image notVisible"></div>
    //         <input type="text" class="last-name" placeholder="Last Name" maxlength="30" required>
    //         <div class="last-name-error"></div>
    //         <div class="validCheck__image notVisible"></div>
    //         <input type="email" class="email" placeholder="E-mail" maxlength="30" required>
    //         <div class="email-error"></div>
    //         <div class="validCheck__image notVisible"></div>
    //       </div>
    //       <div class="player-avatar"></div>
    //     </div>
    //     <div class="button-container">
    //         <button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
    //         <button class="formReg-cancel__btn" type="submit">Cancel</button>
    //     </div>
    //   </div>
    // </div>
    // `;
  }

  checkValid = () => {
    const cover = document.getElementById('cover') as HTMLElement; // затенение
    const formReg = document.getElementById('formReg') as HTMLElement; // форма регистрации
    const addButton = document.querySelector(
      '.formReg-add__btn',
    ) as HTMLElement;
    const cancelButton = document.querySelector(
      '.formReg-cancel__btn',
    ) as HTMLElement;

    const firstNameError = document.querySelector(
      '.first-name-error',
    ) as HTMLElement;
    const lastNameError = document.querySelector(
      '.last-name-error',
    ) as HTMLElement;
    const emailError = document.querySelector('.email-error') as HTMLElement;
    const firstNameCheckValid = document.querySelector(
      '.first-name-error + .validCheck__image',
    ) as HTMLElement;
    const lastNameCheckValid = document.querySelector(
      '.last-name-error + .validCheck__image',
    ) as HTMLElement;
    const emailCheckValid = document.querySelector(
      '.email-error + .validCheck__image',
    ) as HTMLElement;

    const startButton = document.querySelector('.start__btn') as HTMLElement;
    const stopButton = document.querySelector('.stop__btn') as HTMLElement;
    const avatar = document.querySelector('.avatar__img') as HTMLElement;
    const regButton = document.querySelector('.reg__btn') as HTMLElement;

    const FirstNameField = document.querySelector(
      '.first-name',
    ) as HTMLInputElement;
    const LastNameField = document.querySelector(
      '.last-name',
    ) as HTMLInputElement;
    const EmailField = document.querySelector('.email') as HTMLInputElement;

    cancelButton.addEventListener('click', () => {
      // закрываем форму регистрации по cancel
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');
    });

    /* cover.addEventListener('click', () => {
      // закрываем форму регистрации по фону
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');
    });
*/
    addButton.addEventListener('click', () => {
      regButton.classList.add('notVisible');
      startButton.classList.remove('notVisible');
      avatar.classList.remove('notVisible');
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');

      this.player.FirstName = FirstNameField.value;
      this.player.LastName = LastNameField.value;
      this.player.email = EmailField.value;
      this.player.score = 0;
    });

    startButton.addEventListener('click', () => {
      startButton.classList.add('notVisible');
      stopButton.classList.remove('notVisible');
      window.location.hash = '#game';
    });

    const checkAddButton = () => {
      if (
        FirstNameField.validity.valid &&
        LastNameField.validity.valid &&
        EmailField.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)
      ) {
        addButton.classList.remove('invalid');
        addButton.removeAttribute('disabled');
      } else {
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      }
    };

    const validateFirstName = () => {
      if (FirstNameField.value === '') {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может быть пустым.`;
      } else if (FirstNameField.value.match(/[0-9]/)) {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может состоять из цифр.`;
      } else if (FirstNameField.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может содержать служебные символы.`;
      } else {
        firstNameError.innerHTML = ``;
        FirstNameField.classList.remove('inputError');
        firstNameCheckValid.classList.remove('notVisible');
      }
    };

    FirstNameField.addEventListener('input', () => {
      validateFirstName();
      checkAddButton();
    });

    const validateLastName = () => {
      if (LastNameField.value === '') {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может быть пустым.`;
      } else if (LastNameField.value.match(/[0-9]/)) {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может состоять из цифр.`;
      } else if (LastNameField.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может содержать служебные символы.`;
      } else {
        lastNameError.innerHTML = ``;
        LastNameField.classList.remove('inputError');
        lastNameCheckValid.classList.remove('notVisible');
      }
    };

    LastNameField.addEventListener('input', () => {
      validateLastName();
      checkAddButton();
    });

    const validateEmail = () => {
      if (EmailField.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)) {
        emailError.innerHTML = ``;
        EmailField.classList.remove('inputError');
        emailCheckValid.classList.remove('notVisible');
      } else if (EmailField.value === '') {
        EmailField.classList.add('inputError');
        emailCheckValid.classList.add('notVisible');
        emailError.innerHTML = `Адрес не может быть пустым`;
      } else {
        EmailField.classList.add('inputError');
        emailCheckValid.classList.add('notVisible');
        emailError.innerHTML = `Адрес должен соответствовать стандартному правилу формированию email [RFC].`;
      }
    };

    EmailField.addEventListener('input', () => {
      validateEmail();
      checkAddButton();
    });
  };
}
