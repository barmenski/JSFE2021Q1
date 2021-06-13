import { BottomButtons } from './components/bottom-buttons';
import { ControlRace } from './components/control-race';
import { Main } from './components/main';
import { SetAuto } from './components/set-auto';
import { TopButtons } from './components/top-buttons';
import { Wrapper } from './components/wrapper/wrapper';

export class App {
  readonly baseUrl = 'http://localhost:3000';

  readonly path = {
    garage: '/garage/',
    winners: '/winners/',
    engine: '/engine/',
  };

  currentPage: number = 1;

  currentLimit: number = 7;

  totalCars: string = '';

  wrapper = new Wrapper();

  topButtons = new TopButtons();

  setAuto = new SetAuto();

  controlRace = new ControlRace();

  main = new Main();

  bottomButtons = new BottomButtons();

  constructor(private readonly rootElement: HTMLElement) {}

  initPage = () => {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.wrapper.element);
    this.wrapper.element.appendChild(this.topButtons.element);
    this.askServer(this.currentPage, this.currentLimit);
    this.wrapper.element.appendChild(this.setAuto.element);
    this.wrapper.element.appendChild(this.controlRace.element);
    this.wrapper.element.appendChild(this.main.element);
    this.wrapper.element.appendChild(this.bottomButtons.element);
    //this.askServer(this.currentPage, this.currentLimit);
  };

  askServer = async (page: number, limit: number) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.garage}?_page=${page}&_limit=${limit}`,
    );
    const data = await response.json();
    //console.log('response', response.headers.get('X-Total-Count'));
    let totalCars = response.headers.get('X-Total-Count') as string;
    window.app.main.placeName.element.textContent = `Garage (${totalCars})`;
    window.app.totalCars = totalCars;
    window.app.main.addTracks(data);
  };

  requestServer = async (param: string) => {
    const response = await fetch(
      `${window.app.baseUrl}${window.app.path.engine}?${param}`,
    );
    const data = await response.json();
  };
}
