import React, { useState } from "react";

import "../../CSS/SongCard/songCard.css";
import { songData } from "../../Data/SongData/songData";
import PlayCard from "../PlayCard/playCard";
import song from "../../Data/Song/src_music_bon-jovi-its-my-life.mp3";

function SongCard() {
  const [playing, setPlaying] = useState(false);

  const audio = new Audio(song);

  function handleClicked() {
    audio.play();
    setPlaying = true;
  }

  return (
    <>
      {songData.slice(0, 5).map((list, index) => (
        <div className="middleCard" key={index} onClick={handleClicked}>
          <img src={list.url} alt="pho" />
          <h3>Romantic hits by jubin nautiyal</h3>
          <small>{list.artist}</small>
        </div>
      ))}
    </>
  );
}

export default SongCard;
