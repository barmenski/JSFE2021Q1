
/**
	* @typedef IRoute
	* @property {string} name
	* @property {typeof Function} component
	*/
/*
  window.onpopstate = () => {
    console.log(window.location.hash);
    let currentRouteName = window.location.hash.slice(1);
    let currentRoute = routing.find(p => p.name === currentRouteName);

    (currentRoute || defaultRoute).component();
  };

     interface routing {
      name: string;
      component: () => void;
     }[]

    const routing = [{
      name: "settings",
      component: window.app.settingsPage(),
      },
      {
      name: "game",
      component: window.app.gamePage()},
      {
      name: "best-score",
      component: window.app.bestScorePage()},
    ];

    const defaultRoute = {
      name: "default",
      component:  window.app.aboutGamePage()
    };
  window.onpopstate();
*/
