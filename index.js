/* Analog clock */
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

/* Digital clock */
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setInterval(() => {
  const currentTime = new Date();
  updateTimeForAnalogClock(currentTime);
  updateTimeForDigitalClock(currentTime);
});

const updateTimeForAnalogClock = (currentTime) => {
  const hh = currentTime.getHours() * 30;
  const mm = currentTime.getMinutes() * 6;
  const ss = currentTime.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
};

const updateTimeForDigitalClock = (currentTime) => {
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};
