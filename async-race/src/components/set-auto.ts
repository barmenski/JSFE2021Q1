import { BaseComponent } from './base-component';

export class SetAuto extends BaseComponent {
  createSection: HTMLElement;

  createNameInput: HTMLInputElement;

  createColorInput: HTMLInputElement;

  updateSection: HTMLElement;

  updateNameInput: HTMLInputElement;

  updateColorInput: HTMLInputElement;

  createBtn: BaseComponent;

  updateBtn: BaseComponent;

  carName = 'ZAZ';

  carColor = 'black';

  carId = '';

  carNameUpdate = 'ZAZ';

  carColorUpdate = 'black';

  carIdUpdate = '';

  constructor() {
    super('div', ['set-auto-section']);
    this.createSection = document.createElement('div');
    this.createSection.className = 'create-section';
    this.element.append(this.createSection);

    this.createNameInput = document.createElement('input');
    this.createNameInput.className = 'create-name__input';
    this.createNameInput.type = 'text';
    this.createNameInput.addEventListener('change', () => {
      this.carName = this.createNameInput.value;
    });
    this.createSection.append(this.createNameInput);

    this.createColorInput = document.createElement('input');
    this.createColorInput.className = 'create-color__input';
    this.createColorInput.type = 'color';
    this.createColorInput.addEventListener('change', () => {
      this.carColor = this.createColorInput.value;
    });
    this.createSection.append(this.createColorInput);

    this.createBtn = new BaseComponent('button', ['create__btn']);
    this.createBtn.element.textContent = `CREATE`;
    this.createBtn.element.addEventListener('click', () => {
      this.createAuto(this.carName, this.carColor, this.carId);
    });
    this.createSection.appendChild(this.createBtn.element);

    this.updateSection = document.createElement('div');
    this.updateSection.className = 'update-section';
    this.element.append(this.updateSection);

    this.updateNameInput = document.createElement('input');
    this.updateNameInput.className = 'update-name__input';
    this.updateNameInput.type = 'text';
    this.updateNameInput.addEventListener('change', () => {
      this.carNameUpdate = this.updateNameInput.value;
    });
    this.updateSection.append(this.updateNameInput);

    this.updateColorInput = document.createElement('input');
    this.updateColorInput.className = 'update-color__input';
    this.updateColorInput.type = 'color';
    this.updateColorInput.addEventListener('change', () => {
      this.carColorUpdate = this.updateColorInput.value;
    });
    this.updateSection.append(this.updateColorInput);

    this.updateBtn = new BaseComponent('button', ['update__btn']);
    this.updateBtn.element.textContent = `UPDATE`;
    this.updateBtn.element.addEventListener('click', () => {
      console.log(this.carNameUpdate, this.carColorUpdate, this.carIdUpdate);
      this.updateAuto();
    });
    this.updateSection.appendChild(this.updateBtn.element);
  }

  createAuto = async (carName: string, carColor: string, carId: string) => {
    const Car = {
      name: carName,
      color: carColor,
    };

    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.garage}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Car),
      },
    );
    const newCar = await response.json();
    window.app.askServer(window.app.currentPage, window.app.currentLimit);
    window.app.main.addTrack(carName, carColor, carId);
    return newCar;
  };

  updateAuto = async () => {
    const Car = {
      name: this.carNameUpdate,
      color: this.carColorUpdate,
    };
    console.log(this.carId);
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.garage}${this.carIdUpdate}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Car),
      },
    );
    const data = await response.json();
    window.app.askServer(window.app.currentPage, window.app.currentLimit);
    window.app.main.addTracks(data);
    return data;
  };
}
