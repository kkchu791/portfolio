import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import song from '../assets/audio/Real McCoy - Another Night (Official Video).mp3';
import song2 from '../assets/audio/C+C Music Factory - Gonna Make You Sweat (Everybody Dance Now) ft. Freedom Williams (1).mp3';
import style from './Player.module.scss';

export const Player = ({
  currentTab,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = {
    'Home': 0,
    'Projects': 1,
  }

  const handlePlaySong = () => {
    const audioEl = document.getElementsByClassName("audio-element")[tabs[currentTab]];
    if (isPlaying) {
      audioEl.pause();
      setIsPlaying(false);
    } else {
      audioEl.play();
      setIsPlaying(true);
    }
  }

  return (
    <div
      className={style.container}
      onClick={() => handlePlaySong()}
    >
      {isPlaying ? <FontAwesomeIcon icon={faPause} aria-hidden="true" /> : <FontAwesomeIcon icon={faPlay} aria-hidden="true" />}
      <audio className="audio-element">
        <source src={song}></source>
      </audio>
      <audio className="audio-element">
        <source src={song2}></source>
      </audio>
    </div>
  );
}

export default Player;
