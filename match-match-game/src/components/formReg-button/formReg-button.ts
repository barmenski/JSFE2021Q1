import { BaseComponent } from '../base-component';
import './formReg-button.scss';

export class FormRegButton extends BaseComponent {
  constructor(readonly className: string, readonly text: string) {
    // 'add__btn' 'Add Player' + 'cancel__btn' 'Cancel'
    super('form', ['formReg-wrapper']);
    this.element.setAttribute('action', '#form-reg-close'); // обе кнопки закрывают окно
    this.element.innerHTML = `
      <button class="formReg-${className}" type="submit" disabled>${text}</button>
    `;
  }
}
