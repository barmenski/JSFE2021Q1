import { Avatar } from '../avatar/avatar';

export class RegForm {
  readonly avatar = new Avatar();

  readonly formReg: HTMLElement;
  readonly firstName: HTMLElement;
  readonly lastName: HTMLElement;
  readonly email: HTMLElement;

  readonly firstNameError: HTMLElement;
  readonly lastNameError: HTMLElement;
  readonly emailError: HTMLElement;

  readonly validCheckImage: HTMLElement;

  readonly addBtn: HTMLElement;
  readonly cancelBtn: HTMLElement;

  constructor() {
    this.formReg = document.createElement('div');
    this.formReg.classList.add('formReg', 'notVisible');

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

    this.lastName = document.createElement('input');
    this.lastName.setAttribute('type', 'text');
    this.lastName.setAttribute('placeholder', 'Last Name');
    this.lastName.setAttribute('maxlength', '30');
    this.lastName.setAttribute('required', 'true');
    this.lastName.className = 'last-name';

    this.email = document.createElement('input');
    this.email.setAttribute('type', 'text');
    this.email.setAttribute('placeholder', 'E-mail');
    this.email.setAttribute('maxlength', '30');
    this.email.setAttribute('required', 'true');
    this.email.className = 'email';

    this.firstNameError = document.createElement('div');
    this.firstNameError.className = 'first-name-error';

    this.lastNameError = document.createElement('div');
    this.lastNameError.className = 'last-name-error';

    this.emailError = document.createElement('div');
    this.emailError.className = 'email-error';

    this.validCheckImage = document.createElement('div');
    this.validCheckImage.classList.add('validCheck__image', 'notVisible');

    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    this.addBtn = document.createElement('button');
    this.addBtn.classList.add('formReg-add__btn', 'invalid');
    this.addBtn.setAttribute('type', 'submit');
    this.addBtn.setAttribute('disabled', 'true');
    this.addBtn.innerHTML = 'Add User';

    this.cancelBtn = document.createElement('button');
    this.cancelBtn.className = 'formReg-cancel__btn';
    this.cancelBtn.setAttribute('type', 'submit');
    this.cancelBtn.innerHTML = 'Cancel';

    this.formReg.append(heading);
    this.formReg.append(action);
    action.append(inputWrapper);
    action.append(buttonContainer);
    inputWrapper.append(inputContainer);

    inputContainer.append(this.firstName);
    inputContainer.append(this.firstNameError);
    inputContainer.append(this.validCheckImage);

    inputContainer.append(this.lastName);
    inputContainer.append(this.lastNameError);
    inputContainer.append(this.validCheckImage);

    inputContainer.append(this.email);
    inputContainer.append(this.emailError);
    inputContainer.append(this.validCheckImage);

    inputWrapper.append(this.avatar.avatar);

    buttonContainer.append(this.addBtn);
    buttonContainer.append(this.cancelBtn);
  }
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
