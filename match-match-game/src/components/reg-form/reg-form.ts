import { Avatar } from '../avatar/avatar';
import { Player } from '../player';

export class RegForm {
  readonly avatar = new Avatar();

  readonly regFormWrapper: HTMLElement;
  readonly firstName: HTMLInputElement;
  readonly lastName: HTMLInputElement;
  readonly email: HTMLInputElement;

  readonly firstNameError: HTMLElement;
  readonly lastNameError: HTMLElement;
  readonly emailError: HTMLElement;

  readonly validCheckImage: HTMLElement;
  readonly validArray: Array<HTMLElement>;

  readonly addBtn: HTMLElement;
  readonly cancelBtn: HTMLElement;

  player: Player = new Player('', '', '', 0);

  constructor() {
    this.regFormWrapper = document.createElement('div');
    this.regFormWrapper.classList.add('reg-form__wrapper', 'notVisible');

    let heading = document.createElement('h1');
    heading.className = 'heading-form';
    heading.innerHTML = 'Registration new Player';

    let action = document.createElement('div');
    action.className = 'action';

    let inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    let inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    this.firstName = document.createElement('input');
    this.firstName.setAttribute('type', 'text');
    this.firstName.setAttribute('placeholder', 'First Name');
    this.firstName.setAttribute('maxlength', '30');
    this.firstName.setAttribute('required', 'true');
    this.firstName.className = 'first-name';
    this.firstName.addEventListener('input', () => {
      this.validateFirstName();
      this.checkAddButton();
    });

    this.lastName = document.createElement('input');
    this.lastName.setAttribute('type', 'text');
    this.lastName.setAttribute('placeholder', 'Last Name');
    this.lastName.setAttribute('maxlength', '30');
    this.lastName.setAttribute('required', 'true');
    this.lastName.className = 'last-name';
    this.lastName.addEventListener('input', () => {
      this.validateLastName();
      this.checkAddButton();
    });

    this.email = document.createElement('input');
    this.email.setAttribute('type', 'text');
    this.email.setAttribute('placeholder', 'E-mail');
    this.email.setAttribute('maxlength', '30');
    this.email.setAttribute('required', 'true');
    this.email.className = 'email';
    this.email.addEventListener('input', () => {
      this.validateEmail();
      this.checkAddButton();
    });

    this.firstNameError = document.createElement('div');
    this.firstNameError.className = 'first-name-error';

    this.lastNameError = document.createElement('div');
    this.lastNameError.className = 'last-name-error';

    this.emailError = document.createElement('div');
    this.emailError.className = 'email-error';

    this.validCheckImage = document.createElement('div');
    this.validCheckImage.classList.add('validCheck__image', 'notVisible');
    this.validArray = [];
    for (let i = 0; i < 3; i++) {
      let clone = this.validCheckImage.cloneNode(true);
      this.validArray.push(clone as HTMLElement);
    }

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    this.addBtn = document.createElement('button');
    this.addBtn.classList.add('reg-form-add__btn', 'invalid');
    this.addBtn.setAttribute('type', 'submit');
    this.addBtn.setAttribute('disabled', 'true');
    this.addBtn.innerHTML = 'Add User';
    this.addBtn.addEventListener('click', () => {
      window.app.header.gameButton.regBtn.classList.add('notVisible');
      window.app.header.gameButton.startBtn.classList.remove('notVisible');
      document.body.classList.remove('notScrollable');
      window.app.header.cover.classList.add('notVisible');
      this.regFormWrapper.classList.add('notVisible');

      // this.player.FirstName = FirstNameField.value;
      // this.player.LastName = LastNameField.value;
      // this.player.email = EmailField.value;
      // this.player.score = 0;
    });

    this.cancelBtn = document.createElement('button');
    this.cancelBtn.className = 'reg-form-cancel__btn';
    this.cancelBtn.setAttribute('type', 'submit');
    this.cancelBtn.innerHTML = 'Cancel';
    this.cancelBtn.addEventListener('click', () => {
      // closed form by click cancel
      document.body.classList.remove('notScrollable');
      window.app.header.cover.classList.add('notVisible');
      this.regFormWrapper.classList.add('notVisible');
    });

    this.regFormWrapper.append(heading);
    this.regFormWrapper.append(action);
    action.append(inputWrapper);
    action.append(buttonContainer);
    inputWrapper.append(inputContainer);

    inputContainer.append(this.firstName);
    inputContainer.append(this.firstNameError);
    inputContainer.append(this.validArray[0]);

    inputContainer.append(this.lastName);
    inputContainer.append(this.lastNameError);
    inputContainer.append(this.validArray[1]);

    inputContainer.append(this.email);
    inputContainer.append(this.emailError);
    inputContainer.append(this.validArray[2]);

    inputWrapper.append(this.avatar.avatar);

    buttonContainer.append(this.addBtn);
    buttonContainer.append(this.cancelBtn);
  }

  validateFirstName = () => {
    if (this.firstName.value === '') {
      this.firstName.classList.add('inputError');
      this.validArray[0].classList.add('notVisible');
      this.firstNameError.innerHTML = `Имя не может быть пустым.`;
    } else if (this.firstName.value.match(/[0-9]/)) {
      this.firstName.classList.add('inputError');
      this.validArray[0].classList.add('notVisible');
      this.firstNameError.innerHTML = `Имя не может состоять из цифр.`;
    } else if (this.firstName.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
      this.firstName.classList.add('inputError');
      this.validArray[0].classList.add('notVisible');
      this.firstNameError.innerHTML = `Имя не может содержать служебные символы.`;
    } else {
      this.firstNameError.innerHTML = ``;
      this.firstName.classList.remove('inputError');
      this.validArray[0].classList.remove('notVisible');
    }
  };

  validateLastName = () => {
    if (this.lastName.value === '') {
      this.lastName.classList.add('inputError');
      this.validArray[1].classList.add('notVisible');
      this.lastNameError.innerHTML = `Имя не может быть пустым.`;
    } else if (this.lastName.value.match(/[0-9]/)) {
      this.lastName.classList.add('inputError');
      this.validArray[1].classList.add('notVisible');
      this.lastNameError.innerHTML = `Имя не может состоять из цифр.`;
    } else if (this.lastName.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)) {
      this.lastName.classList.add('inputError');
      this.validArray[1].classList.add('notVisible');
      this.lastNameError.innerHTML = `Имя не может содержать служебные символы.`;
    } else {
      this.lastNameError.innerHTML = ``;
      this.lastName.classList.remove('inputError');
      this.validArray[1].classList.remove('notVisible');
    }
  };

  validateEmail = () => {
    if (this.email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)) {
      this.emailError.innerHTML = ``;
      this.email.classList.remove('inputError');
      this.validArray[2].classList.remove('notVisible');
    } else if (this.email.value === '') {
      this.email.classList.add('inputError');
      this.validArray[2].classList.add('notVisible');
      this.emailError.innerHTML = `Адрес не может быть пустым`;
    } else {
      this.email.classList.add('inputError');
      this.validArray[2].classList.add('notVisible');
      this.emailError.innerHTML = `Адрес должен соответствовать стандартному правилу формированию email [RFC].`;
    }
  };

  checkAddButton = () => {
    if (
      this.firstName.validity.valid &&
      this.lastName.validity.valid &&
      this.email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)
    ) {
      this.addBtn.classList.remove('invalid');
      this.addBtn.removeAttribute('disabled');
    } else {
      this.addBtn.classList.add('invalid');
      this.addBtn.setAttribute('disabled', '');
    }
  };
}
//<div id="formReg" class="formReg notVisible">
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
