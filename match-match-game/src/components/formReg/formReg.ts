import { BaseComponent } from '../base-component';
import './formReg.scss'

export class FormReg extends BaseComponent {
  constructor() {
    super('div', ['formReg']);
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
      <div class="button-container">
        <button class="formReg-add__btn invalid" type="submit" disabled>Add User</button>
        <button class="formReg-cancel__btn" type="submit" disabled>Cancel</button>
      </div>
    </form>
    `;
  }
}
