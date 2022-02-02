import './styles.scss';
import { App } from './app';
import { Player } from './components/player';
import { Database } from './components/database';
import defAvatar from './assets/images/avatar.svg';

declare global {
  interface Window {
    app: App;
    player: Player;
    database: Database;
  }
}
window.database = new Database();
window.database.init('barmenski', 1);
let firstPlayer: Player;
let askDB = window.database.readFirst('players');
askDB.then(result => console.log(result));
window.player = new Player('', '', '', 0, `${defAvatar}`);

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
  {
    name: 'indexeddb-test',
    component: window.app.indexedDbPage,
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
