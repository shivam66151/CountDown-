const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

const newYear = 'January 1' + (getcurrentyear + 1);

function countdown() {
  const getcurrentyear = new Date().getFullYear();
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
}
