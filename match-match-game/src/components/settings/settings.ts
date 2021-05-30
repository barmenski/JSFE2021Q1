import { BaseComponent } from '../base-component';
import './settings.scss';

export class Settings extends BaseComponent {

  categoryCards: number ;

  amountCards: number ;

  constructor() {
    super('div', ['settings']);
    this.categoryCards = 0;
    this.amountCards = 8;
    this.element.innerHTML = `
      <div class="game-cards">
        <div class="select-container">
          <h1 class="heading-settings">Game cards</h1>
          <select class="category-cards-select">
            <option value="">select game cards type</option>
            <option class="select-item" value="0">Argentina</option>
            <option class="select-item" value="1">Real assets</option>
          </select>
        </div>
        <div class="select-container">
          <h1 class="heading-settings">Difficulty</h1>
          <select class="amount-cards-select">
            <option value="">select game type</option>
            <option class="select-item" value="8">4x4</option>
            <option class="select-item" value="18">6x6</option>
            <option class="select-item" value="32">8x8</option>
          </select>
        </div>
      </div>
    `;
  }

  initSettings = () => {

    const selectCategoryCards = document.querySelector('.category-cards-select') as HTMLSelectElement;
    const selectAmountCards = document.querySelector('.amount-cards-select') as HTMLSelectElement;

    selectCategoryCards.addEventListener('change', (event) => {
      this.categoryCards = parseInt((event.target as HTMLSelectElement).value);
    });


    selectAmountCards.addEventListener('change', (event) => {
      this.amountCards = parseInt((event.target as HTMLSelectElement).value);
    });

  //return [this.catergoryCards, this.amountCards];
  }


}
