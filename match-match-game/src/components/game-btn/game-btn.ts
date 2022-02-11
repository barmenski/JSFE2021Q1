import './game-btn.scss';

export class GameButton {
  readonly wrapperBtn: HTMLElement;

  readonly regBtn: HTMLElement;

  readonly startBtn: HTMLElement;

  readonly stopBtn: HTMLElement;

  constructor() {
    this.wrapperBtn = document.createElement('div');
    this.wrapperBtn.className = 'wrapper__btn';

    this.regBtn = document.createElement('button');
    this.regBtn.className = 'reg__btn';
    this.regBtn.innerHTML = 'REGISTER NEW PLAYER';
    if (window.player.LastName !== 'dbEmpty') {
      this.regBtn.classList.add('notVisible');
    } else {
      this.regBtn.classList.remove('notVisible');
    }
    this.regBtn.addEventListener('click', () => {
      // launch registration form
      document.body.classList.add('notScrollable');
      window.app.header.cover.classList.remove('notVisible');
      window.app.header.regFormMini.regFormWrapper.classList.remove(
        'notVisible',
      );
    });

    this.startBtn = document.createElement('button');
    this.startBtn.classList.add('start__btn', 'notVisible');
    this.startBtn.innerHTML = 'START GAME';
    if (window.player.LastName === 'dbEmpty') {
      this.startBtn.classList.add('notVisible');
    } else {
      this.startBtn.classList.remove('notVisible');
    }
    this.startBtn.addEventListener('click', () => {
      this.startBtn.classList.add('notVisible');
      this.stopBtn.classList.remove('notVisible');
      window.location.hash = '#game';
    });

    this.stopBtn = document.createElement('button');
    this.stopBtn.classList.add('stop__btn', 'notVisible');
    this.stopBtn.innerHTML = 'STOP GAME';
    this.stopBtn.addEventListener('click', () => {
      this.stopBtn.classList.add('notVisible');
      this.startBtn.classList.remove('notVisible');
      window.location.hash = '#about-game';
    });

    const gameBtn = document.createElement('div');
    gameBtn.className = 'game__btn';

    gameBtn.append(this.regBtn);
    gameBtn.append(this.startBtn);
    gameBtn.append(this.stopBtn);

    this.wrapperBtn.append(gameBtn);
  }
}

//   <div class="wrapper__btn">
//     <div class="game__btn">
//       <button type="submit" class="reg__btn">REGISTER NEW PLAYER</button>
//       <button type="submit" class="start__btn notVisible">START GAME</button>
//       <button type="submit" class="stop__btn notVisible">STOP GAME</button>
//     </div>
//   </div>
