import './styles.scss';
import { App } from './app';

declare global {
  interface Window {
      app: App;
  }
}


//window.onload = () => {
  const appElement = document.querySelector('body');
  if (!appElement) throw Error('<body> element not found');
  window.app = new App(appElement);
  window.app.aboutGamePage();
  //new App(appElement).start();
console.log(2);
//};

window.addEventListener('hashchange', () => {
  console.log(3);
  //console.log(window.location.hash);
  let currentRouteName = window.location.hash.slice(1);
  let currentRoute = routing.find(p => p.name === currentRouteName);
 console.log(currentRoute);
  (currentRoute || defaultRoute).component();
});

   interface routing {
    name: string;
    component: () => void;
   }[]
console.log(1);
  const routing = [{
    name: "settings",
    component: window.app.settingsPage
    },
    {
    name: "game",
    component: window.app.gamePage
    },
    {
    name: "best-score",
    component: window.app.bestScorePage
    },
  ];

  const defaultRoute = {
    name: "default",
    component:  window.app.aboutGamePage
  };

window.onpopstate = () =>{};

