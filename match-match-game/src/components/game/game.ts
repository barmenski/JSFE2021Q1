import { delay } from '../../shared/delay';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { Congrat } from '../congrat/congrat';
import { Settings } from '../settings/settings';
import { Timer } from '../timer/timer';
import { RegForm } from '../reg-form/reg-form';
import '../header/header';

const FLIP_DELAY = 1.0;
let gameTimeStr: string;
let gameTimeNum: number;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  readonly settings: Settings;

  readonly timer: Timer;

  readonly congrat: Congrat;

  private activeCard?: Card;

  private isAnimation = false;

  readonly regForm = new RegForm();

  rightClick: number;

  wrongClick: number;

  scoreClick: number;

  score: number;

  constructor() {
    super('div', ['wrapper-cards']);
    this.cardsField = new CardsField();
    this.timer = new Timer();
    this.congrat = new Congrat();
    this.timer.Clear();
    this.timer.Start();
    this.settings = new Settings();
    this.rightClick = 0;
    this.wrongClick = 0;
    this.scoreClick = 0;
    this.score = 0;

    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.congrat.element);
  }

  newGame(images: string[]) {
    this.timer.Clear();
    this.timer.Start();
    this.cardsField.clear();
    this.rightClick = 0;
    this.wrongClick = 0;
    this.scoreClick = 0;
    this.score = 0;
    const cards = images
      .concat(images)
      .map(url => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);

    const timeField = document.querySelector('.timer') as HTMLElement;
    const startButton = document.querySelector('.start__btn') as HTMLElement;
    const stopButton = document.querySelector('.stop__btn') as HTMLElement;

    stopButton.addEventListener('click', () => {
      startButton.classList.remove('notVisible');
      stopButton.classList.add('notVisible');
      this.timer.Stop();
      gameTimeStr = timeField.innerHTML;
      gameTimeNum = this.timer.resultTime;
      window.location.hash = '#best-score';
    });
  }

  finishGame = () => {
    const timeField = document.querySelector('.timer') as HTMLElement;
    const startButton = document.querySelector('.start__btn') as HTMLElement;
    const stopButton = document.querySelector('.stop__btn') as HTMLElement;

    const cover = document.querySelector('.cover') as HTMLElement;
    const congratPopup = document.querySelector('.congrat') as HTMLElement;
    const congratText = document.querySelector('.congrat__text') as HTMLElement;
    const congratButton = document.querySelector(
      '.congrat__btn',
    ) as HTMLElement;

    startButton.classList.remove('notVisible');
    stopButton.classList.add('notVisible');
    this.timer.Stop();
    gameTimeStr = timeField.innerHTML;
    gameTimeNum = this.timer.resultTime;

    let score: number = this.rightClick * 100 - gameTimeNum * 10;
    if (score < 0) score = 0;

    cover.classList.remove('notVisible');
    congratPopup.classList.remove('notVisible');
    congratText.innerHTML = `Congratulations! You successfully found all matches on ${gameTimeStr} minutes. Score: ${score}`;
    window.player.score = score;
    console.log('player from game', window.player);
    window.database.write('players', window.player);

    congratButton.addEventListener('click', () => {
      cover.classList.add('notVisible');
      congratPopup.classList.add('notVisible');
      congratText.innerHTML = ``;
      window.location.hash = '#best-score';
    });
    cover.addEventListener('click', () => {
      cover.classList.add('notVisible');
      congratPopup.classList.add('notVisible');
      congratText.innerHTML = ``;
      window.location.hash = '#best-score';
    });
  };

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      card.element.classList.add('wrong');
      this.activeCard.element.classList.add('wrong');
      this.wrongClick++;
      await delay(FLIP_DELAY * 1000);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      card.element.classList.remove('wrong');
      this.activeCard.element.classList.remove('wrong');
    } else {
      card.element.classList.add('right');
      this.activeCard.element.classList.add('right');
      this.rightClick++;
      if (this.rightClick === this.settings.amountCards) this.finishGame();
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
