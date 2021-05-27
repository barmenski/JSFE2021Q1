import './timer.scss';

export class Timer {
  sec = 0;

  min = 0;

  timerId: ReturnType<typeof setInterval> | null;

  element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('timer');
    this.timerId = null;
  }

  tick = () => {
    this.sec++;
    if (this.sec >= 60) {
      // задаем числовые параметры, меняющиеся по ходу работы программы
      this.min++;
      this.sec -= 60;
    }

    if (this.sec < 10) {
      // Визуальное оформление
      if (this.min < 10) {
        this.element.innerHTML = `0${this.min}:0${this.sec}`;
      } else {
        this.element.innerHTML = `${this.min}:0${this.sec}`;
      }
    } else if (this.min < 10) {
      this.element.innerHTML = `0${this.min}:${this.sec}`;
    } else {
      this.element.innerHTML = `${this.min}:${this.sec}`;
    }
  };

  Start = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  Stop = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  };

  Clear = () => {
    this.sec = 0;
    this.min = 0;
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.element.innerHTML = `0${this.min}:0${this.sec}`;
  };
}
