import React from "react";
import Header from "../Components/Header/header";
import Left from "../Components/Left/left";
import Middle from "../Components/Middle/middle";
import PlayCard from "../Components/PlayCard/playCard";
import Right from "../Components/Right/right";
import "./../CSS/Global/global.css";
function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Left />
        <Middle />
        <Right />
        {/* <PlayCard /> */}
      </div>
    </>
  );
}
export default Home;
