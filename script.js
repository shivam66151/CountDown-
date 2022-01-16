const daysS1 = document.getElementById('days');
const hoursS1 = document.getElementById('hours');
const minsS1 = document.getElementById('min');
const secsS1 = document.getElementById('sec');

const currentYearEve = '31 Dec ' + new Date().getFullYear(); //Dynamic JS
//const newYears = '1 Jan 2022'//

function countdown() {
  const newYearsDate = new Date(currentYearEve);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;

  daysS1.innerHTML = days;
  hoursS1.innerHTML = formatTime(hours);
  minsS1.innerHTML = formatTime(mins);
  secsS1.innerHTML = formatTime(secs);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//
countdown();

setInterval(countdown, 1000);
