const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();
monthNameEl.innerText = date.toLocaleString('es-ES', {month: 'long'});
dayNameEl.innerText = date.toLocaleString('es-ES', {weekday: 'long'});;
dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
