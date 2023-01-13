const buttonOn = document.querySelector('.on');
const buttonOff = document.querySelector('.off');

let idTimer1;
let idTimer2;

class Clock {
  constructor(selector) {
    const element = document.querySelector(selector);
    this.element = element;
  }
  render() {
    const clock = new Date();
    let nowHours = clock.getHours();
    let nowMinutes = clock.getMinutes();
    let nowSeconds = clock.getSeconds();
    this.element.innerHTML = `${nowHours} : ${nowMinutes} : ${nowSeconds} `;
  }
  onTimer() {
    const idTimer = setInterval(() => this.render(), 500);
    return idTimer;
  }
  offTimer(i) {
    clearInterval(i);
  }
}

const timer = new Clock('.showTime');

class Milliseconds extends Clock {
  constructor(selector) {
    super(selector);
  }
  render() {
    super.render();
    const clock = new Date();
    let nowMilliseconds = clock.getMilliseconds();

    this.element.insertAdjacentHTML('beforeend', `: ${nowMilliseconds}`);
  }
  onTimer() {
    const idTimer = super.onTimer();
    return idTimer;
  }
  offTimer(i) {
    super.offTimer(i);
  }
}
function onTimers() {
  idTimer1 = timer.onTimer();
  idTimer2 = newTime.onTimer();
}
function offTimers() {
  timer.offTimer(idTimer1);
  newTime.offTimer(idTimer2);
}

const newTime = new Milliseconds('.showTimeMillisec');

buttonOn.addEventListener('click', onTimers);
buttonOff.addEventListener('click', offTimers);
