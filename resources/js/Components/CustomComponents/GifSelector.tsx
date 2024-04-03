// GifSelector.tsx
import React, { FC, ChangeEvent , useState, useEffect} from 'react';
import axios from 'axios';

import sample from "../aIPz2Bh.gif";
import sample1 from "../pixel.gif";

const gifList: string[] = [
  sample,
  sample1,
  sample,
  sample1,
  sample,
  // Add more URLs as needed
];

interface GifSelectorProps {
  onSelect: (selectedGif: string) => void;
}

const GifSelector: FC<GifSelectorProps> = ({ onSelect }) => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/fetch-data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount.
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGif = e.target.value;
    onSelect(selectedGif);
  };

  return (
    <div>
      Themes
      <select onChange={handleSelectChange} className="inline py-0 px-fit w-fit text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        

      {data.map((item: any) => (
         <option value= {item.path}>
         
            
            {item.name} 
           
        </option>
          
        ))}

      </select>
     
    </div>
  );
};

export default GifSelector;


// GifSelector.tsx
// import React, { FC, ChangeEvent, useEffect, useState } from 'react';

// interface GifSelectorProps {
//   onSelect: (selectedGif: string) => void;
// }

// const GifSelector: FC<GifSelectorProps> = ({ onSelect }) => {
//   const [gifList, setGifList] = useState<string[]>([]);

//   useEffect(() => {
//     // Adjust the URL based on your Laravel setup
//     fetch('http://127.0.0.1:8000/api/gifs')
//       .then(response => response.json())
//       .then(data => setGifList(data))
//       .catch(error => console.error('Error fetching GIFs:', error));
//   }, []);

//   const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const selectedGif = e.target.value;
//     onSelect(selectedGif);
//   };

//   return (
//     <div>
//       <select
//         onChange={handleSelectChange}
//         className="block py-0 px-fit w-fit text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
//       >
//         {gifList.map((url, index) => (
//           <option key={index} value={url}>
//             weather {index + 1}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default GifSelector;


// YourComponent.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import GifSelector from './GifSelector'; // Assuming GifSelector is in the same directory

// const YourComponent: React.FC = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [selectedGif, setSelectedGif] = useState<string>(''); // State to store the selected gif URL

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/fetch-data');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once on component mount.

//   const handleGifSelect = (selectedGif: string) => {
//     setSelectedGif(selectedGif);
//   };

//   return (
//     <div>
//       <h1>Your Data:</h1>
//       {/* <GifSelector onSelect={handleGifSelect} /> */}
//       <ul>
//         {data.map((item: any) => (
//           <li key={item.id}>
//             {/* Render each item of data here */}
//             {item.name} {/* Assuming 'name' is a column in your database table */}
//             <img src={selectedGif || item.path} alt="Gif" />
//           </li>
//         ))}
//       </ul>
//     </div>
    
//   );
// };

// export default YourComponent;
