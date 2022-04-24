import React from "react";

import "../../CSS/List/list.css";
const List = ({ icon, title }) => {
  return (
    <>
      <div className="list">
        {icon}
        <p>{title}</p>
      </div>
    </>
  );
};
export default List;
