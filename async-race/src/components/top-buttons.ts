import { BaseComponent } from './base-component';

export class TopButtons extends BaseComponent {
  toGarageBtn: BaseComponent;

  toWinnersBtn: BaseComponent;

  constructor() {
    super('div', ['button-container', 'top__btn']);

    this.toGarageBtn = new BaseComponent('button', ['to-garage__btn']);
    this.toGarageBtn.element.textContent = `TO GARAGE`;
    this.toGarageBtn.element.addEventListener('click', () => {
      console.log(window.app.currentPage, window.app.currentLimit);
      window.app.askServer(window.app.currentPage, window.app.currentLimit);
    });
    this.element.appendChild(this.toGarageBtn.element);

    this.toWinnersBtn = new BaseComponent('button', ['to-winners__btn']);
    this.toWinnersBtn.element.textContent = `TO WINNERS`;
    this.toWinnersBtn.element.addEventListener('click', () => {
      alert('Go to winners!');
    });
    this.element.appendChild(this.toWinnersBtn.element);
  }
}
