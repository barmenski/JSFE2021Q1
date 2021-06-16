import { BaseComponent } from './base-component';
import { Car } from './car';
import { FinishRegistrator } from './finish-registrator/finish-registrator';

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

  name = '';

  color = '';

  id = '';

  requestId = 0;

  left = 0;

  duration = 0;

  velocity = 0;

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
      window.app.setAuto.updateColorInput.value = carColor;
      window.app.setAuto.updateNameInput.value = carName;
      window.app.setAuto.carColorUpdate = carColor;
      window.app.setAuto.carNameUpdate = carName;
      window.app.setAuto.carIdUpdate = carId;
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
    this.name = carName;
    this.carHeader.element.appendChild(this.carName.element);

    this.road = new BaseComponent('div', ['road']);
    this.element.appendChild(this.road.element);

    this.car = new Car(carColor, carId);
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
    const trackSelect = document.querySelector(
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
    const trackSelect = document.querySelector(
      `[data-id="${id}"]`,
    ) as HTMLElement;
    // trackSelect.dataset.velocity = data.velocity;

    const widthScreen = window.innerWidth;
    this.velocity = data.velocity;
    this.duration = Math.round((widthScreen / data.velocity) * 13);
    // trackSelect.dataset.duration = String(duration);
    this.animation(id, this.duration, this.velocity);
    if (data) return this.statusDrive(id);
    return data;
  };

  stopEngine = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?id=${id}&status=stopped`,
    );
    const data = await response.json();
    console.log('stopEngin', data);
    const CarSelect = document.querySelector(
      `[data-car-id="${id}"]`,
    ) as HTMLElement;
    cancelAnimationFrame(this.requestId);
    this.left = 0;
    CarSelect.style.left = `${this.left}px`;
  };

  statusDrive = async (id: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?id=${id}&status=drive`,
    );

    try {
      const data = await response.json();
      console.log('statusDrive', data.success);
    } catch (e) {
      cancelAnimationFrame(this.requestId);
    }
    return id;
  };

  animation = (id: string, duration: number, velocity: number) => {
    const CarSelect = document.querySelector(
      `[data-car-id="${id}"]`,
    ) as HTMLElement;
    const durationShow = duration;
    this.left += velocity / 16;
    CarSelect.style.left = `${this.left}px`;
    if (duration > 0) {
      this.requestId = requestAnimationFrame(() => {
        this.animation(id, duration - 1, velocity);
      });
    } else {
      window.app.main.finishRegistrator.init(this.name, this.duration);
      cancelAnimationFrame(this.requestId);
    }
    return duration;
  };
}
