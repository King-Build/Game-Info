import axios from 'axios';

const API_KEY = 'e480dbe0074c430891601c1f7352bce1';
export const getGamesByDate = (start, end) =>
  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${start},${end}`);
export const getPopularGames = () =>
  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2025-08-01&ordering=-added`);
export const getHighRatingGames = () =>
  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2025-08-01&ordering=-rating`);
export const getSelectedGame = (id) =>
  axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

