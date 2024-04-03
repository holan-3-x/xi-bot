// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
// import { WinBoxWrapper } from "../Components/IboComponents/WinBoxWrapper";
import navbar from "../Components/CustomComponents/Navbar";
// import axios from "axios";
// import sample from './repair-  services-robot-future-live-wallpaper-1.mp4';
import BackGroundVid from "../Components/CustomComponents/dump/BackGroundVid";
import Navbar from "../Components/CustomComponents/Navbar";
import IconsApps from "../Components/CustomComponents/IconApps";
// import "../public/Font/FreePixel.ttf";
// import "../public/Font/FreePixel.ttf";
// import { RightClickMenu } from "../Components/IboComponents/RightClickMenu/RightClickMenu";
// import { Test } from "../Components/IboComponents/Test";
import CustomMenu from "../Components/CustomComponents/dump/CustomMenu";
import DefaultGifchose from "../Components/aIPz2Bh.gif";
// import BackgroundSelector from "../Components/IboComponents/BackgroundSelector";
import GifSelector from '../Components/CustomComponents/GifSelector';
// import SelectorTheme from "../Components/BackgroundSelector";
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
// import IconsApps from '../Components/IboComponents/IconApps';
{
    /**
function MyComponent() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://catfact.ninja/fact');
        const data = response.data;
        setApiData(data.fact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div id='api'>{apiData}</div>
      <h1>Hello, WinBox!</h1>
      <p>This is a simple WinBox component in React.</p>
    </div>
  );
}
 */
}

function App({ auth }: PageProps) {

  const [selectedGif, setSelectedGif] = useState('');

  const handleGifSelect = (url) => {
      const defaultGif = DefaultGifchose; // Replace with your default GIF URL
      const selectedUrl = url || defaultGif;

      setSelectedGif(selectedUrl);

      // Set background image and additional styling properties
      document.body.style.backgroundImage = `url('${selectedUrl}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.zIndex = '-10';
      document.body.className = 'absolute -z-10 w-full h-full bg-cover object-cover';
  };
 // Choose a default GIF when the component mounts
 useEffect(() => {
  handleGifSelect(DefaultGifchose); // Replace with your default GIF URL
}, []);

    return (
      <>
        <Head title="Dashboard" />
        <div className="p-0 m-0 place-items-start items-start align-baseline">
            {/* <CustomMenu items={[]}/> */}
            {/* <BackGroundVid /> */}
            {/* <BackgroundSelector /> */}
            {/* <GifSelector onSelect={handleGifSelect} /> */}
            <Navbar handleGifSelect={handleGifSelect}
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>} />
            <IconsApps user={auth.user} />
            <CustomMenu items={["Abort C:/"]} />

     
        </div>
        </>
    );
}

export default App;

