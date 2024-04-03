// function BackgroundSelector() {
//     return (
//       <div className="flex flex-col justify-center align-middle">
//         <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-fit p-5 flex flex-col justify-center align-middle">
//           <h1 className="text-lg align-middle justify-center flex">
//             Background Selector
//           </h1>
  
//           <div>
//             <img
//               src="https://64.media.tumblr.com/728cf21657c5e41c4806f3667e735dc3/7bdb6c2b53dbcbea-f8/s640x960/f1401576987fa523b42cc187af132f2aaf6d1db0.gif"
//               alt=""
//               className="rounded-2xl"
//             />
//           </div>
//           <div className="flex justify-center align-middle">
//             <button className="backdrop-blur bg-black/40 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5 flex-col align-middle justify-center ">
//               Choose Background
//             </button>
//           </div>
//           <select name="" id="" className="rounded-lg text-black">
//             <option value="" className="">
//               🤖🤖🤖
//             </option>
//             <option value="">background 2</option>
//             <option value="">background 3</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
  
//   export default BackgroundSelector;
import React, { useState } from 'react';

function BackgroundSelector() {
  const [selectedBackground, setSelectedBackground] = useState(''); // State to track the selected background

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-fit p-5 flex flex-col justify-center items-center">
        <h1 className="text-lg">Background Selector</h1>

        <div>
          {/* Display the selected background or a default GIF */}
          <img
            src={
              selectedBackground ||
              'https://64.media.tumblr.com/728cf21657c5e41c4806f3667e735dc3/7bdb6c2b53dbcbea-f8/s640x960/f1401576987fa523b42cc187af132f2aaf6d1db0.gif'
            }
            alt=""
            className="rounded-2xl"
          />
        </div>

        <div className="flex justify-center items-center">
          <button className="backdrop-blur bg-black/40 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5">
            Choose Background
          </button>
        </div>

        {/* Dropdown menu for background selection */}
        <select
          name="background"
          id="background"
          className="rounded-lg text-black"
          onChange={handleBackgroundChange}
          value={selectedBackground}
        >
          <option value="">🤖🤖🤖</option>
          <option value="background2">Background 2</option>
          <option value="background3">Background 3</option>
        </select>
      </div>
    </div>
  );
}

export default BackgroundSelector;
