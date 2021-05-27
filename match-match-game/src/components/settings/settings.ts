import { BaseComponent } from '../base-component';
import './settings.scss';

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    this.element.innerHTML = `
      <div class="game-cards">
        <div class="select-container">
          <h1 class="heading-settings">Game cards</h1>
          <select class="game-cards-select">
            <option disabled selected>select game cards type</option>
            <option class="select-item" value="argentina">Argentina</option>
            <option class="select-item" valeu="real-assets">Real assets</option>
          </select>
        </div>
        <div class="select-container">
          <h1 class="heading-settings">Difficulty</h1>
          <select class="game-cards-select">
            <option disabled selected>select game type type</option>
            <option class="select-item" value="4x4">4x4</option>
            <option class="select-item" value="6x6">6x6</option>
            <option class="select-item" value="8x8">8x8</option>
          </select>
        </div>
      </div>
    `;
  }
}
