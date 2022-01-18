import './avatar.scss';

export class Avatar {
  readonly avatar: HTMLElement;

  constructor() {
    this.avatar = document.createElement('div');
    this.avatar.className = 'player-avatar';
  }
}
