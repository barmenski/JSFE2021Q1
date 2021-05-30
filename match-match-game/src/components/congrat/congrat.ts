import { BaseComponent } from '../base-component';
import './congrat.scss';

export class Congrat extends BaseComponent {
  constructor() {
    super('div', ['congrat', 'notVisible']);
    this.element.innerHTML = `
      <p class="congrat__text"></p>
      <button type="submit" class="congrat__btn">OK</button>
    `;
  }
}
