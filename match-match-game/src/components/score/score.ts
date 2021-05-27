import { BaseComponent } from '../base-component';
import './score.scss';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['main']);
    this.element.innerHTML = `
    <h1 class="heading">Best players</h1>
    <ul class="score-list">
      <li class="score-item">
        <div class="item__image"></div>
        <div class="item-container">
          <div class="item__name">Nicci Troiani</div>
          <div class="item__email">nicci@gmail.com</div>
        </div>
        <div class="item__score">Score: <span>456</span></div>
      </li>
      <li class="score-item">
        <div class="item__image"></div>
        <div class="item-container">
          <div class="item__name">Nicci Troiani</div>
          <div class="item__email">nicci@gmail.com</div>
        </div>
        <div class="item__score">Score: <span>456</span></div>
      </li>
      <li class="score-item">
        <div class="item__image"></div>
        <div class="item-container">
          <div class="item__name">Nicci Troiani</div>
          <div class="item__email">nicci@gmail.com</div>
        </div>
        <div class="item__score">Score: <span>456</span></div>
      </li>
    </ul>
    `;
  }
}
