const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');

const newYear = 'January 1' + (getcurrentyear + 1);

function countdown() {
  const getcurrentyear = new Date().getFullYear()
}
