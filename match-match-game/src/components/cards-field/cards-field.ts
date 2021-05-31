import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';

const SHOW_TIME = 30;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  show_timer: ReturnType<typeof setInterval> | null;

  constructor() {
    super('div', ['cards-field']);
    this.show_timer = null;
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
    if (this.show_timer) clearTimeout(this.show_timer);
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));
    this.show_timer = setTimeout(() => {
      this.cards.forEach(card => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}
