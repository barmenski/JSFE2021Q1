interface NavInput {
  ref: string;
  styles: string[];
  text: string;
}

export class NavBar {
  readonly list: HTMLElement;

  constructor(links: Array<NavInput>) {
    this.list = document.createElement('ul');
    this.list.className = 'nav-list';

    for (let i = 0; i < links.length; i++) {
      let item = document.createElement('li');
      item.className = 'nav-item';

      let navLink = document.createElement('a');
      navLink.href = links[i].ref;
      navLink.classList.add(...links[i].styles);
      navLink.innerHTML = links[i].text;

      item.append(navLink);
      this.list.append(item);
    }

    window.addEventListener('hashchange', () => {
      const currentRouteName = window.location.hash.slice(1);
      const passiveLink = document
        .querySelectorAll('.nav-item a')
        .forEach((item: any) => {
          item.classList.remove('active');
        });
      const activeLink = document
        .querySelectorAll('.nav-item a')
        .forEach((item: any) => {
          if (item.hash.slice(1) === currentRouteName) {
            if (!item.classList.contains('active')) {
              item.classList.add('active');
            }
          }
        });
    });
  }
}
//[{ref: "#about-game", styles: ["nav-link__about", "active"], text: "About Game"},
//{ref: "#best-score", styles: ["nav-link__score"], text: "Best Score"}]
