import { BaseComponent } from '../base-component';
import { Player } from '../player';
import './score.scss';
import { ScoreLine } from './scoreLine';

interface MyRecord {
  firstName: string;
  lastName: string;
  email: string;
  score: number;
  id: IDBValidKey;
}

export class Score extends BaseComponent {
  innerElement = null as HTMLUListElement | null;

  scoreLine!: ScoreLine;

  constructor() {
    super('div', ['main']);
    this.element.innerHTML = `
    <h1 class="heading">Best players</h1>
    <ul class="score-list">
    </ul>
    <button class="clear__btn" type="submit">Clear</button>
    `;
  }

  reset = () => {
    this.element.innerHTML = `
    <h1 class="heading">Best players</h1>
    <ul class="score-list">
    </ul>
    `;
  };

  addAll = () => {
    this.innerElement = document.querySelector('.score-list');
    const promise: Promise<Array<Player>> =
      window.app.database.readAll('players');
    promise.then(result => {
      for (let i = 0; i < result.length; i++) {
        this.scoreLine = new ScoreLine(
          result[i].FirstName,
          result[i].LastName,
          result[i].email,
          result[i].score,
          result[i].image,
        );

        this.innerElement?.insertAdjacentElement(
          'afterbegin',
          this.scoreLine.item,
        );
      }
    });
  };

  addLine = () => {
    this.innerElement = null;
    this.innerElement = document.querySelector('.score-list');
    const promise: Promise<Array<Player>> =
      window.app.database.readFiltered('players');
    promise.then(result => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        this.scoreLine = new ScoreLine(
          result[i].FirstName,
          result[i].LastName,
          result[i].email,
          result[i].score,
          result[i].image,
        );
        this.innerElement?.insertAdjacentElement(
          'afterbegin',
          this.scoreLine.item,
        );
      }
    });
  };
}
