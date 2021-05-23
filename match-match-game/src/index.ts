import './styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.querySelector('body');

  if (!appElement) throw Error('<body> element not found');
  (window as any).app = new App(appElement);
  (window as any).app.start();
  /*new App(appElement).start();*/
};
