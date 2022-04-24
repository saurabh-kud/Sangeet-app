import React from "react";
import "../../CSS/Left/left.css";
import {
  FaHome,
  FaStar,
  FaUser,
  FaCompactDisc,
  FaArrowUp,
  FaUsers,
  FaHeart,
  FaQuestion,
} from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import List from "./list";

function Left() {
  return (
    <>
      <div className="container left-section">
        <List icon={<FaHome size="12" />} title="Home" />
        <List icon={<FaStar size="12" />} title="Top" />
        <List icon={<FaUser size="12" />} title="Album" />
        <List icon={<FaUsers size="12" />} title="Artist" />
        <small>Discover</small>
        <List icon={<FaArrowUp size="12" />} title="Trending in India" />
        <List icon={<FaArrowUp size="12" />} title="Popular Artist" />
        <small>Collection</small>
        <List icon={<FaHeart size="12" />} title="Favorite Song" />
        <List icon={<FaArrowUp size="12" />} title="Romantic" />
        <small>General</small>
        <List icon={<GoGear size="12" />} title="Setting" />
        <List icon={<FaQuestion size="12" />} title="Support" />
        <List icon={<FiLogOut size="12" />} title="Logout" />
      </div>
    </>
  );
}
export default Left;
