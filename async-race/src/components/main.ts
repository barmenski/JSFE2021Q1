import { BaseComponent } from './base-component';
import { Track } from './track';

export class Main extends BaseComponent {
  placeName: BaseComponent;

  pageNumber: BaseComponent;

  trackContainer: BaseComponent;

  track?: Track;

  constructor() {
    super('main', ['main']);

    this.placeName = new BaseComponent('h2', ['place-name']);
    console.log(this);
    //console.log(window.app.totalCars);
    this.placeName.element.textContent = `Garage ()`;
    this.element.appendChild(this.placeName.element);

    this.pageNumber = new BaseComponent('h3', ['page-number']);
    this.pageNumber.element.textContent = `Page #1`;
    this.element.appendChild(this.pageNumber.element);

    this.trackContainer = new BaseComponent('div', ['track-container']);
    this.element.appendChild(this.trackContainer.element);
  }

  addTracks = (data: Array<Track>) => {
    window.app.main.trackContainer.element.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      this.track = new Track(data[i].name, data[i].color, data[i].id);
      window.app.main.trackContainer.element.appendChild(this.track.element);
    }
  };

  addTrack = (carName: string, carColor: string, carId: string) => {
    this.track = new Track(carName, carColor, carId);
    window.app.main.trackContainer.element.appendChild(this.track.element);
  };
}
