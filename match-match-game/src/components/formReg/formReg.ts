import { BaseComponent } from '../base-component';
import { FormRegButton } from '../formReg-button/formReg-button';
import { Header } from '../header/header';
import './formReg.scss';

export class FormReg extends BaseComponent {
  private readonly header: Header;

  private readonly addPlayerBtn: FormRegButton;

  private readonly cancelBtn: FormRegButton;

  constructor() {
    super('div', ['formReg']);
    this.addPlayerBtn = new FormRegButton('add__btn', 'Add Player');
    this.cancelBtn = new FormRegButton('cancel__btn', 'Cancel');
    this.header = new Header();
    this.element.innerHTML = `
    <h1 class="heading-form">Registration new Player</h1>
    <form action="#" class="action">
      <div class="input-wrapper">
        <div class="input-container">
          <input type="text" class="first-name" placeholder="First Name" required>
          <input type="text" class="last-name" placeholder="Last Name" required>
          <input type="email" class="email" placeholder="E-mail" required>
        </div>
        <div class="player-avatar"></div>
      </div>
      <div  class="button-container">
        <form action="#form-reg-close">
          <button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
          <button class="formReg-cancel__btn" type="submit">Cancel</button>
        </form>*/
      </div>
    </form>
    `;
  }
}
/*
   }
   newFormReg = () => {
    const CONTAINER = document.querySelector('.button-container');
    console.log('CONTAINER= '+CONTAINER+'+addPlayerBtn'+this.addPlayerBtn);
    CONTAINER?.appendChild(this.addPlayerBtn.element);
    CONTAINER?.appendChild(this.cancelBtn.element);
   }

*/

/* <form action="#form-reg-close">
<button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
<button class="formReg-cancel__btn" type="submit">Cancel</button>
</form> */
