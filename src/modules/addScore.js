import '../styles.css';
import { newGame, saveScore } from './apiFunctions.js';

let id;
const getId = async () => {
  const storedId = localStorage.getItem('id');
  if (storedId) {
    id = storedId;
  } else {
    id = await newGame('My game');
    localStorage.setItem('id', id);
  }
};

const addScore = async () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await getId();
  saveScore(id, name, score);
};

export { getId, addScore };
