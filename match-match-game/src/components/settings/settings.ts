import { BaseComponent } from '../base-component';
import './settings.scss';

export class Settings extends BaseComponent {
  categoryCards: number;

  amountCards: number;

  showTime: number;

  gameCards: HTMLElement;

  categoryArray: Array<[number, string]>;

  amountArray: Array<[number, string]>;

  timeArray: Array<number>;

  saveBtn: HTMLElement;

  doneLabel: HTMLElement;

  constructor() {
    super('div', ['settings']);
    this.categoryCards = window.player.categoryCards;
    this.amountCards = window.player.amountCards;
    this.showTime = window.player.showTime;

    this.categoryArray = [
      [0, 'Argentina'],
      [1, 'Real assets'],
    ];
    this.amountArray = [
      [8, '4x4'],
      [18, '6x6'],
      [32, '8x8'],
    ];
    this.timeArray = [1, 5, 10, 20, 30];

    this.gameCards = document.createElement('div');
    this.gameCards.className = 'game-cards';

    const selectContainerCategory = document.createElement('div');
    selectContainerCategory.className = 'select-container';

    const selectContainerAmount = document.createElement('div');
    selectContainerAmount.className = 'select-container';

    const selectContainerTime = document.createElement('div');
    selectContainerTime.className = 'select-container';

    const hSettingsCategory = document.createElement('h1');
    hSettingsCategory.className = 'heading-settings';
    hSettingsCategory.innerHTML = 'Game cards';

    const hSettingsAmount = document.createElement('h1');
    hSettingsAmount.className = 'heading-settings';
    hSettingsAmount.innerHTML = 'Difficulty';

    const hSettingsTime = document.createElement('h1');
    hSettingsTime.className = 'heading-settings';
    hSettingsTime.innerHTML = 'Show time';

    const categoryCardsSelect = document.createElement('select');
    categoryCardsSelect.className = 'category-cards-select';
    categoryCardsSelect.addEventListener('change', event => {
      this.categoryCards = parseInt(
        (event.target as HTMLSelectElement).value,
        10,
      );
    });

    for (let i = 0; i < this.categoryArray.length; i++) {
      const selectItem = document.createElement('option');
      selectItem.className = 'select-item';
      selectItem.setAttribute('value', `${this.categoryArray[i][0]}`);
      selectItem.innerHTML = `${this.categoryArray[i][1]}`;
      if (this.categoryArray[i][0] === this.categoryCards) {
        selectItem.selected = true;
      }
      categoryCardsSelect.append(selectItem);
    }

    const amountCardsSelect = document.createElement('select');
    amountCardsSelect.className = 'amount-cards-select';
    amountCardsSelect.addEventListener('change', event => {
      this.amountCards = parseInt(
        (event.target as HTMLSelectElement).value,
        10,
      );
    });

    for (let i = 0; i < this.amountArray.length; i++) {
      const selectItem = document.createElement('option');
      selectItem.className = 'select-item';
      selectItem.setAttribute('value', `${this.amountArray[i][0]}`);
      selectItem.innerHTML = `${this.amountArray[i][1]}`;
      if (this.amountArray[i][0] === this.amountCards) {
        selectItem.selected = true;
      }
      amountCardsSelect.append(selectItem);
    }

    const showTimeSelect = document.createElement('select');
    showTimeSelect.className = 'show-time-select';
    showTimeSelect.addEventListener('change', event => {
      this.showTime = parseInt((event.target as HTMLSelectElement).value, 10);
    });

    for (let i = 0; i < this.timeArray.length; i++) {
      const selectItem = document.createElement('option');
      selectItem.className = 'select-item';
      selectItem.setAttribute('value', `${this.timeArray[i]}`);
      selectItem.innerHTML = `${this.timeArray[i]}`;
      if (this.timeArray[i] === this.showTime) {
        selectItem.selected = true;
      }
      showTimeSelect.append(selectItem);
    }
    this.doneLabel = document.createElement('label');
    this.doneLabel.classList.add('done-label', 'notVisible');
    this.doneLabel.innerHTML = 'Done!';

    this.saveBtn = document.createElement('button');
    this.saveBtn.classList.add('save__btn');
    this.saveBtn.setAttribute('type', 'submit');

    this.saveBtn.innerHTML = 'Save';
    this.saveBtn.addEventListener('click', () => {
      window.player.categoryCards = this.categoryCards;
      window.player.amountCards = this.amountCards;
      window.player.showTime = this.showTime;
      window.database.write('players', window.player).then(result => {
        if (result) {
          this.doneLabel.classList.remove('notVisible');
          setTimeout(() => this.doneLabel.classList.add('notVisible'), 1500);
        }
      });
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    selectContainerCategory.append(hSettingsCategory);
    selectContainerCategory.append(categoryCardsSelect);
    this.gameCards.append(selectContainerCategory);

    selectContainerAmount.append(hSettingsAmount);
    selectContainerAmount.append(amountCardsSelect);
    this.gameCards.append(selectContainerAmount);

    selectContainerTime.append(hSettingsTime);
    selectContainerTime.append(showTimeSelect);
    this.gameCards.append(selectContainerTime);

    buttonContainer.append(this.saveBtn);
    buttonContainer.append(this.doneLabel);
    this.gameCards.append(buttonContainer);

    this.element.append(this.gameCards);
  }
}

//   <div class="game-cards">
//     <div class="select-container">
//       <h1 class="heading-settings">Game cards</h1>
//       <select class="category-cards-select">
//         <option class="select-item" value="0">Argentina</option>
//         <option class="select-item" value="1">Real assets</option>
//       </select>
//     </div>
//     <div class="select-container">
//       <h1 class="heading-settings">Difficulty</h1>
//       <select class="amount-cards-select">
//         <option class="select-item" value="8">4x4</option>
//         <option class="select-item" value="18">6x6</option>
//         <option class="select-item" value="32">8x8</option>
//       </select>
//     </div>
//     <div class="select-container">
//       <h1 class="heading-settings">Show time</h1>
//       <select class="show-time-select">
//         <option class="select-item" value="1">1</option>
//         <option class="select-item" value="5">5</option>
//         <option class="select-item" value="10">10</option>
//         <option class="select-item" value="20">20</option>
//         <option class="select-item" value="30">30</option>
//       </select>
//     </div>
//   </div>
