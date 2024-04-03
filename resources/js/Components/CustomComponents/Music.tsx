
import AudioPlayer from 'react-modern-audio-player';

const playList = [
  {
    name: 'Freaks',
    writer: 'Surf Curse',
    img: '../imgs/th.jpg',
    src: 'sngs/Surf Curse  Freaks Official Audio.mp3',
    id: 1,
  },
  {
    name: 'name',
    writer: 'writer',
    img: '../imgs/heroes.jpg',
    src: 'sngs/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3',
    id: 2,
  },

  {
    name: 'Heroes Tonight',
    writer: 'NCS',
    img: 'imgs/heroes.jpg',
    src: 'sngs/Janji - Heroes Tonight (feat. Johnning) [NCS Release].mp3',
    id: 3,
},
{
    name: 'DEAF KEV-Invinciple',
    writer: 'NCS',
    img: 'imgs/invinciple.jpg',
    src: 'sngs/DEAF KEV - Invincible NCS.mp3',
    id: 4,
},
{
    name: 'Heaven',
    writer: 'NCS',
    img: 'imgs/heaven.jpg',
    src: 'sngs/Different Heaven & EH DE - My Heart [NCS Release].mp3',
    id: 5
},

]
function Player (){
	return (
		<AudioPlayer playList={playList} />
	)
}

function Music() {
  return (
    <div>
      <AudioPlayer
        playList={playList}
        audioInitialState={{
          // muted: true,
          volume: 0.2,
          curPlayId: 1,
        }}
        placement={{
          interface: {
            templateArea: {
              trackTimeCurrent: "row2-2",
              trackTimeDuration: "row2-4",
              progress: "row2-3",
              playButton: "row3-2",
              repeatType: "row3-1",
              volume: "row3-3",
            },
          },
          player: "top",
        }}
        activeUI={{
          all: true,
          progress: "bar",
        }}
        
      />
    </div>
  );
}


export default Music;
