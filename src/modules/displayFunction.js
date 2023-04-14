import '../styles.css';
import { getScore } from './apiFunctions.js';

const playerScores = document.querySelector('.playerScores');

const display = async () => {
  const storedId = localStorage.getItem('id');
  if (storedId) {
    const data = await getScore(storedId);
    playerScores.innerHTML = '';
    data.forEach((element) => {
      const div = document.createElement('div');
      div.innerHTML = `${element.user}: ${element.score}`;
      div.classList.add('playerScore');
      playerScores.appendChild(div);
    });
  }
};

export { playerScores, display };