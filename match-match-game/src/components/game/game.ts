import { delay } from "../../shared/delay";
import { BaseComponent } from "../base-component";
import { Card } from "../card/card";
import { CardsField } from "../cards-field/cards-field";
import { Timer } from "../timer/timer";

const FLIP_DELAY = 1.5;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;
  readonly timer: Timer;
  private activeCard?: Card;
  private isAnimation = false;

  constructor() {
    super('div', ['wrapper-cards']);
    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.timer.Start();
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - .5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card){
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image != card.image) {
      card.element.classList.add('wrong');
      this.activeCard.element.classList.add('wrong');
      await delay(FLIP_DELAY * 1000);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      card.element.classList.remove('wrong');
      this.activeCard.element.classList.remove('wrong');
    } else {
      card.element.classList.add('right');
      this.activeCard.element.classList.add('right');
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
