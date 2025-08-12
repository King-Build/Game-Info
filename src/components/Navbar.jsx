import React from "react";
import { IoGameControllerOutline } from "react-icons/io5";

const Navbar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  changeDateGame,
  navbarList,
  activeTab,
  handleTabClick,
  getName,
  searchGames,
  setSearchGames,
}) => {
  return (
    <nav className="bg-black text-white flex h-[10vh] items-center justify-between px-10 shadow-lg shadow-purple-700/30">
      <IoGameControllerOutline className="text-5xl text-purple-400 drop-shadow-md cursor-pointer hover:text-purple-300 transition" onClick={changeDateGame} />
      <ul className="flex gap-12 text-lg font-semibold">
        {navbarList.map((tab) => (
          <li key={tab} className={`cursor-pointer transition ${activeTab === tab ? "text-purple-400" : "hover:text-purple-400"}`} onClick={() => handleTabClick(tab)}>{tab}</li>))}
      </ul>
      <div className="flex gap-2">
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="bg-zinc-900 text-white p-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" /><input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); changeDateGame(e); }} className="bg-zinc-900 text-white p-2 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>
      <div className="flex gap-2">
        <input className="p-2 border-2 border-gray-500 rounded-md" type="search" placeholder="Game" value={searchGames} onChange={(e) => setSearchGames(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer" type="button" onClick={() => getName(searchGames)}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
