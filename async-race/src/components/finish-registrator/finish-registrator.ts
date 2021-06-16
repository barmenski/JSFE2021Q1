import { BaseComponent } from '../base-component';
import './finish-registrator.scss';

export class FinishRegistrator extends BaseComponent {
  finishText: BaseComponent;

  finishOkBtn: BaseComponent;

  carName = '';

  raceTime = 0;

  finishFlag = true;

  constructor() {
    super('div', ['finish-registrator', 'notVisible']);
    this.finishText = new BaseComponent('p', ['finish-registrator__text']);
    this.finishText.element.textContent = `Some auto won the race in some seconds!`;
    this.element.appendChild(this.finishText.element);

    this.finishOkBtn = new BaseComponent('button', ['finish-registrator__btn']);
    this.element.appendChild(this.finishOkBtn.element);
    this.finishOkBtn.element.setAttribute('type', 'submit');
    this.finishOkBtn.element.textContent = `OK`;
    this.finishOkBtn.element.addEventListener('click', () => {
      this.finishFlag = true;
      this.element.classList.add('notVisible');
    });
  }

  init = (carName: string, raceTime: number) => {
    if (this.finishFlag) {
      this.element.classList.remove('notVisible');
      this.finishText.element.textContent = `${carName} won the race in ${
        raceTime / 100
      } seconds!`;
    } else return raceTime;
    this.finishFlag = false;
    return raceTime;
  };
}
