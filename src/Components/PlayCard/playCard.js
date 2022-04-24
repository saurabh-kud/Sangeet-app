import React from "react";
import {
  FaForward,
  FaBackward,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaTimes,
} from "react-icons/fa";

import "../../CSS/PlayCard/playCard.css";

function PlayCard() {
  return (
    <>
      <div className="player">
        <div className="playerContainer">
          <div className="leftPart">
            <img
              src="https://raw.githubusercontent.com/saurabh-kud/Sangeet/master/image/excuse.webp"
              alt="img"
            />
            <div className="infoPlayer">
              <h4>ud ja kale kawa</h4>
              <small>ap dilhone</small>
            </div>
          </div>
          <div className="control">
            <div className="controlLeft">
              <FaBackward />
            </div>
            <div className="controlMiddle">
              <FaPause />
            </div>
            <div className="controlRight">
              <FaForward />
            </div>
          </div>
          <div>
            <FaVolumeUp />
          </div>
        </div>
        <FaTimes className="close" />
      </div>
    </>
  );
}
export default PlayCard;
