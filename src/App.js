import React from 'react';
import './App.css';
import Xlogo from './XLogo.jpg';
import TG from './TG.png';
import backgroundGif from './g.gif';  // Import the GIF

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative bg-black">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      ></div>

      {/* Content */}
      <div className='absolute bottom-5 left-5 flex justify-center items-center z-10'>
        <a href="https://x.com/gigabraintoken" className='cursor-none'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#FFFFFF" viewBox="0 0 50 50">
            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
          </svg>
        </a>
        <a href="https://t.me/gigabraintoken" className='cursor-none'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#FFFFFF" viewBox="0 0 50 50">
            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
          </svg>
        </a>
      </div>

      <img src="giga.png" className='absolute top-0 left-0 w-[70%] md:w-[45%]'></img>
      <div className='absolute inset-0 h-screen w-screen bg-black opacity-15'></div>
      <div className='z-10 font-bold text-7xl md:text-[140px] text-white'>GIGABRAIN</div>

      <div className="absolute top-5 text-white text-[10px] md:text-xl z-10">
        CA: 9BFeiSzLtWP8NAUmm5WNwDR9jH7zp19hB1rhqueTpump
      </div>
    </div>
  );
}

export default App;
