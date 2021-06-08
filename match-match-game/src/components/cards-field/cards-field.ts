import './cards-field.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { Settings } from '../settings/settings';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];
  SHOW_TIME = 30;
  settings: Settings;

  show_timer: ReturnType<typeof setInterval> | null;

  constructor() {
    super('div', ['cards-field']);
    this.show_timer = null;
    this.settings = new Settings();
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
    if (this.show_timer) clearTimeout(this.show_timer);
  }

  addCards(cards: Card[]) {
    this.SHOW_TIME = window.app.settings.showTime;
    this.cards = cards;
    this.cards.forEach(card => this.element.appendChild(card.element));
    this.show_timer = setTimeout(() => {
      this.cards.forEach(card => card.flipToBack());
    }, this.SHOW_TIME * 1000);
  }
}
