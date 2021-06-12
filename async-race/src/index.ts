import './styles.scss';
import { App } from './app';

declare global {
  interface Window {
    app: App;
  }
}

const appElement = document.querySelector('body');
if (!appElement) throw Error('<body> element not found');
window.app = new App(appElement);
window.app.initPage();
