import { BaseComponent } from './base-component';

export class BottomButtons extends BaseComponent {
  prevBtn: BaseComponent;

  nextBtn: BaseComponent;

  constructor() {
    super('div', ['button-container', 'bottom__btn']);

    this.prevBtn = new BaseComponent('button', ['prev__btn']);
    this.prevBtn.element.textContent = `Prev.`;
    this.prevBtn.element.addEventListener('click', () => {
      window.app.currentPage--;
      window.app.askServer(window.app.currentPage, window.app.currentLimit);
    });
    this.element.appendChild(this.prevBtn.element);

    this.nextBtn = new BaseComponent('button', ['next__btn']);
    this.nextBtn.element.textContent = `Next`;
    this.nextBtn.element.addEventListener('click', () => {
      window.app.currentPage++;
      window.app.askServer(window.app.currentPage, window.app.currentLimit);
    });
    this.element.appendChild(this.nextBtn.element);
  }
}
