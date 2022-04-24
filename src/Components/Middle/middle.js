import React from "react";
import "../../CSS/Middle/middle.css";
import Carousel from "../Crousel/crousel";
import HeaderDetails from "../HeaderDetails/headerDetails";
import LongCard from "../LongCard/longCard";

import SongCard from "../SongCard/songCard";

function Middle() {
  return (
    <>
      <div className="middle">
        <Carousel />
        <HeaderDetails title="Popular" right="See More" />
        <div className="card">
          <SongCard />
        </div>
        <HeaderDetails title="Weekly Top 10" right="See More" />
        <div className="cardLong">
          <LongCard />
        </div>
      </div>
    </>
  );
}
export default Middle;
