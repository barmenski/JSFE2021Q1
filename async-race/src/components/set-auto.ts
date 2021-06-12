import { BaseComponent } from './base-component';

export class SetAuto extends BaseComponent {
  // createNameInput: BaseComponent;
  // createColorInput: BaseComponent;

  createSection: HTMLElement;

  createNameInput: HTMLInputElement;

  createColorInput: HTMLInputElement;

  updateSection: HTMLElement;

  updateNameInput: HTMLInputElement;

  updateColorInput: HTMLInputElement;

  createBtn: BaseComponent;

  updateBtn: BaseComponent;

  constructor() {
    super('div', ['set-auto-section']);
    this.createSection = document.createElement('div');
    this.createSection.className = 'create-section';
    this.element.append(this.createSection);

    this.createNameInput = document.createElement('input');
    this.createNameInput.className = 'create-name__input';
    this.createNameInput.type = 'text';
    this.createSection.append(this.createNameInput);

    this.createColorInput = document.createElement('input');
    this.createColorInput.className = 'create-color__input';
    this.createColorInput.type = 'color';
    this.createSection.append(this.createColorInput);

    this.createBtn = new BaseComponent('button', ['create__btn']);
    this.createBtn.element.textContent = `CREATE`;
    this.createBtn.element.addEventListener('click', () => {
      alert('Create car!');
    });
    this.createSection.appendChild(this.createBtn.element);

    this.updateSection = document.createElement('div');
    this.updateSection.className = 'update-section';
    this.element.append(this.updateSection);

    this.updateNameInput = document.createElement('input');
    this.updateNameInput.className = 'update-name__input';
    this.updateNameInput.type = 'text';
    this.updateSection.append(this.updateNameInput);

    this.updateColorInput = document.createElement('input');
    this.updateColorInput.className = 'update-color__input';
    this.updateColorInput.type = 'color';
    this.updateSection.append(this.updateColorInput);

    this.updateBtn = new BaseComponent('button', ['update__btn']);
    this.updateBtn.element.textContent = `UPDATE`;
    this.updateBtn.element.addEventListener('click', () => {
      alert('Update car!');
    });
    this.updateSection.appendChild(this.updateBtn.element);
  }
}
