import React from 'react';
import './App.css';
import ChessGame from './Chessgame';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className='z-10'>
        <ChessGame />
      </div>
      <img src="dog.png" className='absolute right-0 bottom-0 w-[60%] md:w-[45%]'></img>
      <div className="absolute top-5 left-5 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/pvptoken" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-12 h-12 rounded-lg" />
          </a>
          <a href="https://www.t.me/solpvptoken" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-12 h-12" />
          </a>
        </div>
      </div>
      <div className='absolute bottom-5 text-white text-[10px] md:text-base'>CA: updating...</div>
    </div>
  );
}

export default App;