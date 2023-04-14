const newGame = async (name) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        body: JSON.stringify({
          name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const data = await response.json();
    if (!data.result || !data.result.includes(': ')) {
      throw new Error('Invalid response from server');
    }
    const gameId = data.result.split(': ')[1];
    return gameId;
  } catch (error) {
    throw new Error(error);
  }
};

const saveScore = async (gameId, user, score) => {
  try {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const data = await response.json();
    return (data);
  } catch (error) {
    throw new Error(error);
  }
};

const getScore = async (gameId) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`,
  );
  const data = await response.json();
  return data.result;
};

export { newGame, saveScore, getScore };