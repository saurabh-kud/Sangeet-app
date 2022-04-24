import React from "react";
import "../../CSS/Right/right.css";
import ArtistCard from "../ArtistCard/artistCard";
import HeaderDetails from "../HeaderDetails/headerDetails";
import RightCard from "../RightCard/rightCard";

function Right() {
  return (
    <>
      <div className="container right ">
        <HeaderDetails title="Recently Played" right="View History" />
        <RightCard />
        <HeaderDetails title="Popular Artist" right="See More" />
        <div className="wrapper">
          <ArtistCard />
        </div>
      </div>
    </>
  );
}

export default Right;
