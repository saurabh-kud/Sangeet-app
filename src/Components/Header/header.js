import React from "react";

import "../../CSS/Header/header.css";
import { FaSun, FaBell } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="Header container">
        <div className="Nav-section">
          <div className="title">
            <a href="/">sangeet</a>
          </div>
          <ul>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Podcase</a>
            </li>
            <li>
              <a href="/">Live</a>
            </li>
            <li>
              <a href="/">Radio</a>
            </li>
          </ul>
          <div className="profile">
            <form>
              <input placeholder="search song"></input>
            </form>
            <FaSun />
            <FaBell />
            <a target={"_blank"} href="https://github.com/saurabh-kud">
              <img src="https://hrcdn.net/s3_pub/hr-avatars/8f00ac8e-b829-4a2e-8f07-41cc0c6d734c/150x150.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
