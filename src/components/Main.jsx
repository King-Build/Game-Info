import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Main = ({ games, selectedGameApi }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar color="yellow" key={i} />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt color="yellow" key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }
        return <div className="flex gap-1 justify-center">{stars}</div>;
    };
    return (
        <div className="min-h-[82vh] grid p-[2%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-black text-white">
            {games.map((item, index) => (
                <div onClick={() => selectedGameApi(item?.id)} key={index} className="flex flex-col items-center text-center gap-4 bg-zinc-900 rounded-lg cursor-pointer border border-purple-700 hover:shadow-md hover:shadow-purple-600 transition duration-300 overflow-hidden">
                    <img className="w-full h-48 object-cover" src={item.background_image} alt={item.name} title="Game" />
                    <h2 className="text-lg font-bold text-purple-300">Title: {item.name}</h2>
                    <div className="flex flex-col items-center">
                        <p className="mb-1">Rating:</p>
                        {renderStars(item.rating)}
                        <p className="text-sm text-gray-400">({item.rating})</p>
                    </div>
                    <p className="text-gray-400 text-sm pb-4">Released: {item.released}</p>
                </div>
            ))}
        </div>
    );
};

export default Main;
