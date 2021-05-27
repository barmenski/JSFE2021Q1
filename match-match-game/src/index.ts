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
window.app.aboutGamePage();

/* interface Routing {
  name: string;
  component: () => void;
}
[]; */

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
  {
    name: 'form-reg',
    component: window.app.formRegPage,
  },
  {
    name: 'form-reg-close',
    component: window.app.formRegClosePage,
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

// nwindow.onpopstate = () =>{};
