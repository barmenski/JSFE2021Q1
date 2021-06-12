import { BaseComponent } from './base-component';

export class Track extends BaseComponent {
  carHeader: BaseComponent;

  carControl: BaseComponent;

  buttonWrapperTop: BaseComponent;

  buttonWrapperBottom: BaseComponent;

  selectBtn: BaseComponent;

  removeBtn: BaseComponent;

  goBtn: BaseComponent;

  returnBtn: BaseComponent;

  carName: BaseComponent;

  road: BaseComponent;

  car: BaseComponent;

  flag: BaseComponent;

  constructor(carModel: string) {
    super('div', ['track']);
    this.carHeader = new BaseComponent('div', ['car-header']);
    this.element.appendChild(this.carHeader.element);

    this.carControl = new BaseComponent('div', ['car-control']);
    this.carHeader.element.appendChild(this.carControl.element);

    this.buttonWrapperTop = new BaseComponent('div', ['button-wrapper']);
    this.carControl.element.appendChild(this.buttonWrapperTop.element);

    this.selectBtn = new BaseComponent('button', [
      'select-car__btn',
      'car__btn',
    ]);
    this.selectBtn.element.textContent = `SELECT`;
    this.selectBtn.element.addEventListener('click', () => {
      alert('Select!');
    });
    this.buttonWrapperTop.element.appendChild(this.selectBtn.element);

    this.removeBtn = new BaseComponent('button', [
      'remove-car__btn',
      'car__btn',
    ]);
    this.removeBtn.element.textContent = `REMOVE`;
    this.removeBtn.element.addEventListener('click', () => {
      alert('Remove!');
    });
    this.buttonWrapperTop.element.appendChild(this.removeBtn.element);

    this.buttonWrapperBottom = new BaseComponent('div', ['button-wrapper']);
    this.carControl.element.appendChild(this.buttonWrapperBottom.element);

    this.goBtn = new BaseComponent('button', ['go-car__btn', 'car__btn']);
    this.goBtn.element.textContent = `GO!`;
    this.goBtn.element.addEventListener('click', () => {
      alert('Go!');
    });
    this.buttonWrapperBottom.element.appendChild(this.goBtn.element);

    this.returnBtn = new BaseComponent('button', [
      'return-car__btn',
      'car__btn',
    ]);
    this.returnBtn.element.textContent = `RETURN`;
    this.returnBtn.element.addEventListener('click', () => {
      alert('Return!');
    });
    this.buttonWrapperBottom.element.appendChild(this.returnBtn.element);

    this.carName = new BaseComponent('h4', ['car-name']);
    this.carName.element.textContent = `${carModel}`;
    this.carHeader.element.appendChild(this.carName.element);

    this.road = new BaseComponent('div', ['road']);
    this.element.appendChild(this.road.element);

    this.car = new BaseComponent('div', ['car']);
    this.road.element.appendChild(this.car.element);

    this.flag = new BaseComponent('div', ['flag']);
    this.road.element.insertAdjacentElement('afterbegin', this.flag.element);
  }
}
