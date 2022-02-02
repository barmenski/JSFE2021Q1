import { Avatar } from '../avatar/avatar';

import './reg-form.scss';
import defAvatar from '../../assets/images/avatar.svg';

export class RegFormMini {
  readonly avatar = new Avatar();

  readonly regFormWrapper: HTMLElement;

  readonly firstName: HTMLInputElement;

  readonly regAvatar: HTMLElement;

  readonly avatarInput: HTMLInputElement;

  readonly firstNameError: HTMLElement;

  readonly validCheckImage: HTMLElement;

  readonly validArray: Array<HTMLElement>;

  readonly addBtn: HTMLElement;

  readonly cancelBtn: HTMLElement;

  imageContainer: HTMLElement;

  constructor() {
    this.regFormWrapper = document.createElement('div');
    this.regFormWrapper.classList.add('reg-form__wrapper', 'notVisible');

    const heading = document.createElement('h1');
    heading.className = 'heading-form';
    heading.innerHTML = 'Registration new Player';

    const action = document.createElement('div');
    action.className = 'action';

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    this.firstName = document.createElement('input');
    this.firstName.setAttribute('type', 'text');
    this.firstName.setAttribute('placeholder', 'Nickname');
    this.firstName.setAttribute('maxlength', '30');
    this.firstName.setAttribute('required', 'true');
    this.firstName.className = 'first-name';
    this.firstName.addEventListener('input', () => {
      this.validateFirstName();
      this.checkAddButton();
    });

    this.regAvatar = document.createElement('div');
    this.regAvatar.className = 'reg-avatar';

    this.imageContainer = document.createElement('img');
    this.imageContainer.className = 'image-container';

    this.imageContainer.setAttribute('src', `${defAvatar}`);

    this.avatarInput = document.createElement('input');
    this.avatarInput.setAttribute('type', 'file');
    this.avatarInput.className = 'avatar-input';
    this.avatarInput.addEventListener('change', () => {
      if (this.avatarInput.files) {
        const file = this.avatarInput.files[0];

        const reader = new FileReader();

        reader.onload = () => {
          this.imageContainer.setAttribute('src', `${reader.result}`);
          window.player.image = reader.result as string;
        };

        reader.readAsDataURL(file);
        this.avatarInput.value = '';
      }
    });

    this.firstNameError = document.createElement('div');
    this.firstNameError.className = 'first-name-error';

    this.validCheckImage = document.createElement('div');
    this.validCheckImage.classList.add('validCheck__image', 'notVisible');
    this.validArray = [];
    for (let i = 0; i < 3; i++) {
      const clone = this.validCheckImage.cloneNode(true);
      this.validArray.push(clone as HTMLElement);
    }

    const buttonContainer = document.createElement('div');
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
      window.player.FirstName = this.firstName.value;
      window.player.score = 0;
      window.app.header.avatar.refresh();
      window.database.write('players', window.player);
      this.regFormWrapper.classList.add('notVisible');
    });

    this.cancelBtn = document.createElement('button');
    this.cancelBtn.className = 'reg-form-cancel__btn';
    this.cancelBtn.setAttribute('type', 'submit');
    this.cancelBtn.innerHTML = 'Cancel';
    this.cancelBtn.addEventListener('click', () => {
      // closed form by click cancel
      document.body.classList.remove('notScrollable');
      window.app.header.avatar.refresh();
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

    this.regAvatar.append(this.imageContainer);
    this.regAvatar.append(this.avatarInput);

    inputWrapper.append(this.regAvatar);

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

  checkAddButton = () => {
    if (this.firstName.validity.valid) {
      this.addBtn.classList.remove('invalid');
      this.addBtn.removeAttribute('disabled');
    } else {
      this.addBtn.classList.add('invalid');
      this.addBtn.setAttribute('disabled', '');
    }
  };
}
// <div id="formReg" class="formReg notVisible">
//   <h1 class="heading-form">Registration new Player</h1>
//   <div class="action">
//     <div class="input-wrapper">
//       <div class="input-container">
//         <input type="text" class="first-name" placeholder="First Name" maxlength="30" required>
//         <div class="first-name-error"></div>
//       </div>
//       <div class="reg-avatar">
//           <img class="img-container">
//           <input type='file' class="avatar-input">
//       </div>
//     </div>
//     <div class="button-container">
//         <button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
//         <button class="formReg-cancel__btn" type="submit">Cancel</button>
//     </div>
//   </div>
