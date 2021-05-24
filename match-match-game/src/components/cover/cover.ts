import { BaseComponent } from '../base-component';
import './cover.scss'

export class Cover extends BaseComponent {

  constructor() {
    super('div', ['cover']);
    this.element.innerHTML = '';
  }
}
