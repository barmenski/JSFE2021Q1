import { BaseComponent } from '../base-component';

export class ScoreLine extends BaseComponent {
  constructor(
    FirstName: string,
    LastName: string,
    email: string,
    score: number,
  ) {
    super('li', ['score-item']);
    this.element.innerHTML = `
    <div class="item__image"></div>
    <div class="item-container">
      <div class="item__name">${FirstName} ${LastName}</div>
      <div class="item__email">${email}</div>
    </div>
    <div class="item__score">Score: <span>${score}</span></div>
    `;
  }
}
