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

const Routing = [
  {
    name: 'settings',
    component: window.app.settingsPage,
  },
  {
    name: 'game',
    component: window.app.gamePage,
  },
  {
    name: 'best-score',
    component: window.app.bestScorePage,
  },
];

const defaultRoute = {
  name: 'default',
  component: window.app.aboutGamePage,
};

window.addEventListener('hashchange', () => {
  const currentRouteName = window.location.hash.slice(1);
  const currentRoute = Routing.find(p => p.name === currentRouteName);
  (currentRoute || defaultRoute).component();
});
