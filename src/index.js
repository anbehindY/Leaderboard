import './styles.css';
import { addScore } from './modules/addScore.js';
import { display } from './modules/displayFunction.js';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
  form.reset();
});

const refresh = document.getElementById('resetBtn');
refresh.addEventListener('click', () => {
  display();
});
