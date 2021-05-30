import { BaseComponent } from '../base-component';
import './about-game.scss';

export class AboutGame extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <h1 class="heading">How to play?</h1>
      <div class="main-section">
        <div class="step one">
          <div class="description-container">
            <p class="description__number">1</p>
            <p class="description__text">Register new player in game</p>
          </div>
          <div class="step-image"></div>
        </div>
        <div class="step two">
          <div class="description-container">
            <p class="description__number">2</p>
            <p class="description__text">Configure your game settings</p>
          </div>
          <div class="step-image"></div>
        </div>
        <div class="step three">
          <div class="description-container">
            <p class="description__number">3</p>
            <p class="description__text">Start you new game! Remember card positions and match it before times up.</p>
          </div>
          <div class="step-image"></div>
        </div>
      </div>
      `;
  }
}
