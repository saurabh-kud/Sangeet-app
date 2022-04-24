import React from "react";

import { singer } from "../../Data/SingerData/singer";
import "../../CSS/ArtistCard/artistCard.css";

function ArtistCard() {
  return (
    <>
      {singer.map((list, index) => (
        <div key={index} className="ArtistWrapper">
          <img src={list.URL} alt="img" />
          <h5>{list.name}</h5>
        </div>
      ))}
    </>
  );
}

export default ArtistCard;
