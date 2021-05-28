import { BaseComponent } from '../base-component';
import './about-game.scss';

export class AboutGame extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <h1 class="heading">How to play?</h1>
      <div class="main-section">
        <div class="step one">
          <div class="description-container">
            <p class="description__number">1</p>
            <p class="description__text">Register new player in game</p>
          </div>
          <div class="step-image"></div>
        </div>
        <div class="step two">
          <div class="description-container">
            <p class="description__number">2</p>
            <p class="description__text">Configure your game settings</p>
          </div>
          <div class="step-image"></div>
        </div>
        <div class="step three">
          <div class="description-container">
            <p class="description__number">3</p>
            <p class="description__text">Start you new game! Remember card positions and match it before times up.</p>
          </div>
          <div class="step-image"></div>
        </div>
      </div>
      <div id="cover" class="cover notVisible">
      </div>
      <div id="formReg" class="formReg notVisible">
        <h1 class="heading-form">Registration new Player</h1>
        <div class="action">
          <div class="input-wrapper">
            <div class="input-container">
              <input type="text" class="first-name" placeholder="First Name" maxlength="30">
              <div class="first-name-error"></div>
              <div class="validCheck__image notVisible"></div>
              <input type="text" class="last-name" placeholder="Last Name" maxlength="30">
              <div class="last-name-error"></div>
              <div class="validCheck__image notVisible"></div>
              <input type="email" class="email" placeholder="E-mail" maxlength="30">
              <div class="email-error"></div>
              <div class="validCheck__image notVisible"></div>
            </div>
            <div class="player-avatar"></div>
          </div>
          <div class="button-container">
              <button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
              <button class="formReg-cancel__btn" type="submit">Cancel</button>
          </div>
        </div>
      </div>
      `;
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

    cancelButton.addEventListener('click', () => {
      // закрываем форму регистрации по cancel
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');
    });

    cover.addEventListener('click', () => {
      // закрываем форму регистрации по фону
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');
    });

    addButton.addEventListener('click', () => {
      regButton.classList.add('notVisible');
      startButton.classList.remove('notVisible');
      avatar.classList.remove('notVisible');
      document.body.classList.remove('notScrollable');
      cover.classList.add('notVisible');
      formReg.classList.add('notVisible');
    });

    startButton.addEventListener('click', () => {
      startButton.classList.add('notVisible');
      stopButton.classList.remove('notVisible');
      window.app.gamePage();
    });

    const FirstNameField = document.querySelector(
      '.first-name',
    ) as HTMLInputElement;
    const LastNameField = document.querySelector(
      '.last-name',
    ) as HTMLInputElement;
    const EmailField = document.querySelector('.email') as HTMLInputElement;

    const validateFirstName = () => {
      if (FirstNameField.value === '') {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может быть пустым.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else if (FirstNameField.value.match(/[0-9]/)) {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может состоять из цифр.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else if (FirstNameField.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
        FirstNameField.classList.add('inputError');
        firstNameCheckValid.classList.add('notVisible');
        firstNameError.innerHTML = `Имя не может содержать служебные символы.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else {
        firstNameError.innerHTML = ``;
        FirstNameField.classList.remove('inputError');
        firstNameCheckValid.classList.remove('notVisible');
        addButton.classList.remove('invalid');
        addButton.removeAttribute('disabled');
      }
    };

    FirstNameField.addEventListener('input', () => {
      validateFirstName();
    });

    const validateLastName = () => {
      if (LastNameField.value === '') {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может быть пустым.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else if (LastNameField.value.match(/[0-9]/)) {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может состоять из цифр.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else if (LastNameField.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
        LastNameField.classList.add('inputError');
        lastNameCheckValid.classList.add('notVisible');
        lastNameError.innerHTML = `Имя не может содержать служебные символы.`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else {
        lastNameError.innerHTML = ``;
        LastNameField.classList.remove('inputError');
        lastNameCheckValid.classList.remove('notVisible');
        addButton.classList.remove('invalid');
        addButton.removeAttribute('disabled');
      }
    };

    LastNameField.addEventListener('input', () => {
      validateLastName();
    });

    const validateEmail = () => {
      if (EmailField.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)) {
        emailError.innerHTML = ``;
        EmailField.classList.remove('inputError');
        emailCheckValid.classList.remove('notVisible');
        addButton.classList.remove('invalid');
        addButton.removeAttribute('disabled');
      } else if (EmailField.value === '') {
        EmailField.classList.add('inputError');
        emailCheckValid.classList.add('notVisible');
        emailError.innerHTML = `Адрес не может быть пустым`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      } else {
        EmailField.classList.add('inputError');
        emailCheckValid.classList.add('notVisible');
        emailError.innerHTML = `Адрес должен соответствовать стандартному правилу формированию email [RFC].`;
        addButton.classList.add('invalid');
        addButton.setAttribute('disabled', '');
      }
    };

    EmailField.addEventListener('input', () => {
      validateEmail();
    });
  };
}
