import React from "react";
import "../../CSS/LongCard/longCard.css";
import { songData } from "../../Data/SongData/songData";

const n = 10;
function LongCard(n) {
  return (
    <>
      {songData.map((list, index) => (
        <div key={index} className="longCard">
          <div className="info">
            <h2>{list.id}</h2>

            <img src={list.url} alt="img" />
            <div className="song">
              <h5>{list.song}</h5>
              <small>{list.artist}</small>
            </div>
          </div>

          <h3>...</h3>
        </div>
      ))}
    </>
  );
}
export default LongCard;
