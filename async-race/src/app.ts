import { BottomButtons } from './components/bottom-buttons';
import { ControlRace } from './components/control-race';
import { Main } from './components/main';
import { SetAuto } from './components/set-auto';
import { TopButtons } from './components/top-buttons';
import { Wrapper } from './components/wrapper/wrapper';

export class App {
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
    this.wrapper.element.appendChild(this.setAuto.element);
    this.wrapper.element.appendChild(this.controlRace.element);
    this.wrapper.element.appendChild(this.main.element);
    this.wrapper.element.appendChild(this.bottomButtons.element);
  };
}
