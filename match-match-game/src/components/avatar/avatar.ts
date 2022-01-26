import './avatar.scss';
import defAvatar from '../../assets/images/avatar.svg';

export class Avatar {
  readonly avatar: HTMLElement;

  constructor() {
    this.avatar = document.createElement('img');
    this.avatar.className = 'avatar__img';
    this.avatar.setAttribute('src', `${window.player.image}`);
  }

  refresh = () => {
    this.avatar.setAttribute('src', `${window.player.image}`);
    console.log('refresh', window.player.image);
  };
}
