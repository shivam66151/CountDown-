const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('min');
const secsE1 = document.getElementById('sec');

const currentYearEve = '31 Dec ' + new Date().getFullYear();

function countdown() {
  const newYearsDate = new Date(currentYearEve);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;

  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minsE1.innerHTML = formatTime(mins);
  secsE1.innerHTML = formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//
countdown();

setInterval(countdown, 1000);
