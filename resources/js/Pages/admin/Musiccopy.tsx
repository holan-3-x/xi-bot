// import React, { useEffect, useState } from 'react';
// import CreateMusicForm from '@/Components/CustomComponents/CreateMusicForm';


// import AudioPlayer from 'react-modern-audio-player';

// function MusicList() {
//   const [musicList, setMusicList] = useState([]);

//   useEffect(() => {
//     // Fetch music data from Laravel API endpoint
//     fetch('/api/music') // Replace '/api/music' with the actual endpoint
//       .then((response) => response.json())
//       .then((data) => setMusicList(data))
//       .catch((error) => console.error('Error fetching music data:', error));
//   }, []);

//   // Format the fetched data to match your playlist structure
//   const formattedPlayList = musicList.map((music) => ({
//     name: music.name,
//     writer: music.writer,
//     img: music.img,
//     src: music.src,
//     id: music.id,
//   }));

//   return (
    
     
//       <div>
//          <CreateMusicForm/>
//       <AudioPlayer
//         playList={formattedPlayList}
//         audioInitialState={{
//           // muted: true,
//           volume: 0.2,
//           curPlayId: 1,
//         }}
//         placement={{
//           interface: {
//             templateArea: {
//               trackTimeCurrent: "row2-2",
//               trackTimeDuration: "row2-4",
//               progress: "row2-3",
//               playButton: "row3-2",
//               repeatType: "row3-1",
//               volume: "row3-3",
//             },
//           },
//           player: "top",
//         }}
//         activeUI={{
//           all: true,
//           progress: "bar",
//         }}
//       />
//     </div>
     
//   );
// };

// export default MusicList;
import CreateMusicForm from '@/Components/CustomComponents/CreateMusicForm';
import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-modern-audio-player';

function Music() {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    // Fetch playlist data from Laravel backend
    fetch('/music') // Update the URL based on your Laravel API route
      .then((response) => response.json())
      .then((data) => setPlayList(data))
      .catch((error) => console.error('Error fetching playlist:', error));
  }, []);

  return (
    <div>
      
      {playList.length > 0 ? (
        <AudioPlayer
          playList={playList.map((item) => ({
            name: item.name,
            writer: item.writer,
            img: item.img,
            src: item.src,
            id: item.id,
          }))}
          audioInitialState={{
            volume: 0.2,
            curPlayId: playList[0].id, // Assuming your backend returns the playlist in the correct order
          }}
          placement={{
            interface: {
              templateArea: {
                trackTimeCurrent: 'row2-2',
                trackTimeDuration: 'row2-4',
                progress: 'row2-3',
                playButton: 'row3-2',
                repeatType: 'row3-1',
                volume: 'row3-3',
              },
            },
            player: 'top',
          }}
          activeUI={{
            all: true,
            progress: 'bar',
          }}
        />
      ) : (
        <p>Loading playlist...</p>
      )}
      {/* do not mind it is working mobody touch it */}
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    <CreateMusicForm/>  
    </div>
    
  );
}

export default Music;
