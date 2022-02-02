import './avatar.scss';

export class Avatar {
  readonly avatar: HTMLElement;
  readonly firstName: HTMLElement;
  readonly avatarWrapper: HTMLElement;

  constructor() {
    this.avatarWrapper = document.createElement('div');
    this.avatarWrapper.className = 'avatar__wrapper';

    this.avatar = document.createElement('img');
    this.avatar.className = 'avatar__img';
    this.avatar.setAttribute('src', `${window.player.image}`);

    this.firstName = document.createElement('span');
    this.firstName.className = 'avatar__name';
    this.firstName.innerHTML = `${window.player.FirstName}`;

    this.avatarWrapper.append(this.firstName);
    this.avatarWrapper.append(this.avatar);
  }

  refresh = () => {
    this.avatar.setAttribute('src', `${window.player.image}`);
    this.firstName.innerHTML = `${window.player.FirstName}`;
  };
}
