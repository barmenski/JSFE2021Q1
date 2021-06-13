import { BaseComponent } from './base-component';
import { Car } from './car';

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

  car: Car;

  flag: BaseComponent;

  name: string = '';

  color: string = '';

  id: string = '';

  constructor(carName: string, carColor: string, carId: string) {
    super('div', ['track']);
    this.element.dataset.id = carId;
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
      this.deleteAuto(carId);
    });
    this.buttonWrapperTop.element.appendChild(this.removeBtn.element);

    this.buttonWrapperBottom = new BaseComponent('div', ['button-wrapper']);
    this.carControl.element.appendChild(this.buttonWrapperBottom.element);

    this.goBtn = new BaseComponent('button', ['go-car__btn', 'car__btn']);
    this.goBtn.element.textContent = `GO!`;
    this.goBtn.element.addEventListener('click', () => {
      this.startEngine(carId);
    });
    this.buttonWrapperBottom.element.appendChild(this.goBtn.element);

    this.returnBtn = new BaseComponent('button', [
      'return-car__btn',
      'car__btn',
    ]);
    this.returnBtn.element.textContent = `RETURN`;
    this.returnBtn.element.addEventListener('click', () => {
      this.stopEngine(carId);
    });
    this.buttonWrapperBottom.element.appendChild(this.returnBtn.element);

    this.carName = new BaseComponent('h4', ['car-name']);
    this.carName.element.textContent = `${carName}`;
    this.carHeader.element.appendChild(this.carName.element);

    this.road = new BaseComponent('div', ['road']);
    this.element.appendChild(this.road.element);

    this.car = new Car(carColor);
    this.road.element.appendChild(this.car.element);

    this.flag = new BaseComponent('div', ['flag']);
    this.road.element.insertAdjacentElement('afterbegin', this.flag.element);
  }

  deleteAuto = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.garage}${id}`,
      {
        method: 'DELETE',
      },
    );
    const newCar = await response.json();
    let trackSelect = document.querySelector(
      `[data-id="${id}"]`,
    ) as HTMLElement;
    trackSelect.remove();
    window.app.askServer(window.app.currentPage, window.app.currentLimit);
  };

  startEngine = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?id=${id}&status=started`,
    );
    const data = await response.json();

    console.log('startEngine', data);
    let trackSelect = document.querySelector(
      `[data-id="${id}"]`,
    ) as HTMLElement;
    trackSelect.dataset.velocity = data.velocity;
    trackSelect.dataset.distance = data.distance;
    trackSelect.dataset.duration = String(data.distance / data.velocity);
    if (data) return this.statusDrive(id);
  };

  stopEngine = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?id=${id}&status=stopped`,
    );
    const data = await response.json();
    console.log('stopEngin', data);
  };

  statusDrive = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?id=${id}&status=drive`,
    );
    const data = await response.json();
    console.log('statusDrive', data);
  };
}
