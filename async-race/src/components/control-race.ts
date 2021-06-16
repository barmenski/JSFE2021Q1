import { BaseComponent } from './base-component';

export class ControlRace extends BaseComponent {
  startAllBtn: BaseComponent;

  resetAllBtn: BaseComponent;

  generateCarsBtn: BaseComponent;

  constructor() {
    super('div', ['control-race-section']);

    this.startAllBtn = new BaseComponent('button', ['start-all__btn']);
    this.startAllBtn.element.textContent = `RACE`;
    this.startAllBtn.element.addEventListener('click', () => {
      alert('Start All!');
      this.startAll();
    });
    this.element.appendChild(this.startAllBtn.element);

    this.resetAllBtn = new BaseComponent('button', ['to-winners__btn']);
    this.resetAllBtn.element.textContent = `RESET`;
    this.resetAllBtn.element.addEventListener('click', () => {
      alert('Reset All!');
    });
    this.element.appendChild(this.resetAllBtn.element);

    this.generateCarsBtn = new BaseComponent('button', ['generate-cars__btn']);
    this.generateCarsBtn.element.textContent = `Generate cars`;
    this.generateCarsBtn.element.addEventListener('click', () => {
      alert('Generate cars!');
    });
    this.element.appendChild(this.generateCarsBtn.element);
  }

  startAll = () => {
    // console.log(window.app.main.track);

    const TRACKS = document.querySelectorAll('.car');
    // for (let item of TRACKS) {
    console.log(TRACKS);
    // }
  };
}
