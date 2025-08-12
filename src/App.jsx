import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedGame from './components/SelectedGame';
import {
  getGamesByDate,
  getHighRatingGames,
  getPopularGames,
  getSelectedGame
} from './api';
import { navbarList } from './data';
import axios from 'axios';

const App = () => {
  const [games, setGames] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedGame, setSelectedGame] = useState({});
  const [showSelectedGame, setShowSelectedGame] = useState(false);
  const [activeTab, setActiveTab] = useState('Last Games');
  const [searchGames, setSearchGames] = useState('')

  useEffect(() => {
    getGamesByDate('2025-01-01', '2025-08-01')
      .then((res) => setGames(res.data.results))
      .catch(console.log);
  }, []);

  const changeDateGame = (e) => {
    e.preventDefault();
    setActiveTab('Last Games');
    getGamesByDate(startDate, endDate)
      .then((res) => setGames(res.data.results))
      .catch(console.log);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'Rating Games') {
      getHighRatingGames().then((res) => setGames(res.data.results));
    } else if (tab === 'Popular Games') {
      getPopularGames().then((res) => setGames(res.data.results));
    } else {
      getGamesByDate('2024-01-01', '2024-12-01').then((res) =>
        setGames(res.data.results)
      );
    }
  };

  const selectedGameApi = (id) => {
    getSelectedGame(id)
      .then((res) => setSelectedGame(res.data))
      .catch(console.log);
    setShowSelectedGame(true);
  };

  const getName = (searchGames) => {
    axios
      .get(`https://api.rawg.io/api/games?key=e480dbe0074c430891601c1f7352bce1&search=${searchGames}`)
      .then((res) => setGames(res.data.results))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        changeDateGame={changeDateGame}
        navbarList={navbarList}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        getName={getName}
        searchGames={searchGames}
        setSearchGames={setSearchGames}
      />
      {showSelectedGame && (
        <SelectedGame setShowSelectedGame={setShowSelectedGame} selectedGame={selectedGame} />)}
      <Main selectedGameApi={selectedGameApi} games={games} />
      <Footer />
    </div>
  );
};

export default App;
