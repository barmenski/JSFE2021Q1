import { BaseComponent } from '../base-component';
import './logo-link.scss';

export class LogoLink extends BaseComponent {
  constructor() {
    super('a', ['logo-link']);
    this.element.innerHTML = '';
    this.element.setAttribute('href', '#game');
    this.element.setAttribute('title', 'Go to game!');
  }
}
// <a href="#game" title="Go to game!" class="logo-link"></a>
