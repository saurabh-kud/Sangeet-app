import React from "react";
import "../../CSS/RightCard/rightCard.css";
import { songData } from "../../Data/SongData/songData";

function RightCard() {
  return (
    <>
      {songData.slice(0, 5).map((list, index) => (
        <div key={index} className="container rightCard">
          <div className="container rightLeft">
            <img src={list.url} alt="img" />
            <div className="details">
              <h3>{list.song}</h3>
              <small>{list.artist}</small>
            </div>
          </div>
          <div className="duration">{list.duration}</div>
        </div>
      ))}
    </>
  );
}
export default RightCard;
