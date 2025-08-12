import { React, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const SelectedGame = ({ selectedGame, setShowSelectedGame }) => {
    const [showImg, setShowImg] = useState(false);
    const [currentImg, setCurrentImg] = useState("");
    const openFullScreen = (imgUrl) => {
        setCurrentImg(imgUrl);
        setShowImg(true);
    };
    return (
        <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] z-50 bg-black/80">
            <div className="bg-zinc-900 p-6 rounded-lg flex flex-col gap-4 h-[90vh] w-[90vw] overflow-y-auto relative border-2 border-purple-700 shadow-lg shadow-purple-600/30">
                <h2 className="text-purple-300 text-2xl font-bold">{selectedGame?.name} </h2>
                <p className="text-gray-300 leading-relaxed">{selectedGame?.description_raw}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedGame?.tags?.map((item, index) => (
                        <img key={index} src={item.image_background} alt={item.name} className="w-full h-40 object-cover rounded-md cursor-pointer hover:opacity-80 transition" onClick={() => openFullScreen(item.image_background)} />
                    ))}
                </div>
                <IoIosCloseCircle onClick={() => setShowSelectedGame(false)} className="absolute top-4 right-6 text-red-600 text-5xl cursor-pointer hover:text-red-400 transition" />
            </div>
            {showImg && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[60]">
                    <img src={currentImg} alt="Fullscreen" className="max-w-full max-h-full object-contain" />
                    <IoIosCloseCircle onClick={() => setShowImg(false)} className="absolute top-6 right-6 text-white text-5xl cursor-pointer hover:text-red-400 transition" />
                </div>
            )}
        </div>
    );
};

export default SelectedGame;
