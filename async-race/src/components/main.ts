import { BaseComponent } from './base-component';
import { Track } from './track';

export class Main extends BaseComponent {
  placeName: BaseComponent;

  pageNumber: BaseComponent;

  track: Track;

  constructor() {
    super('main', ['main']);

    this.placeName = new BaseComponent('h2', ['place-name']);
    this.placeName.element.textContent = `Garage (4)`;
    this.element.appendChild(this.placeName.element);

    this.pageNumber = new BaseComponent('h3', ['page-number']);
    this.pageNumber.element.textContent = `Page #1`;
    this.element.appendChild(this.pageNumber.element);

    this.track = new Track('Lada Devyatka');
    this.element.appendChild(this.track.element);
    this.track = new Track('ZAZ');
    this.element.appendChild(this.track.element);
  }
}
