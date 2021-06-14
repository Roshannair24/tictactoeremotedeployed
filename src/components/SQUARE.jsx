import React from "react";
import Xv1 from "./../icons/xv1purp.png";
import Xv2 from "./../icons/xv1purpcirc.png";

function SQUARE(props) {
  return (
    <div>
      {props.currentarray[props.id] == "X" ? (
        <img src={Xv1} alt="X" className="imageingridsquare"></img>
      ) : null}

      {props.currentarray[props.id] == "O" ? (
        <img src={Xv2} alt="O" className="imageingridsquare"></img>
      ) : null}
    </div>
  );
}

export default SQUARE;
