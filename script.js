const days01 = document.getElementById('days');
const hours01 = document.getElementById('hours');
const mins01 = document.getElementById('min');
const secs01 = document.getElementById('sec');

const newYear = 'January 1' + (new Date().getFullYear() + 1);

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  days01.innerHTML = days;
  hours01.innerHTML = formatTime(hours);
  mins01.innerHTML = formatTime(mins);
  secs01.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0${time}' : time;
}

countdown();

setInterval(countdown, 1000);
