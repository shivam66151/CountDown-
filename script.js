const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

const newYear = 'January 1' + (new Date().getFullYear() + 1);

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = 
}
