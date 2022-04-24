import React from "react";
import "../../CSS/HeaderDetails/headerDetails.css";
function HeaderDetails(props) {
  return (
    <>
      <div className="headerDetails">
        <h3>{props.title}</h3>
        <small>{props.right}</small>
      </div>
    </>
  );
}
export default HeaderDetails;
