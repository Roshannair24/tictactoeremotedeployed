// import React from "react";
let isfull = false;

function AI(props) {

  console.log("here");

  console.log(props);

  let localAIarrayscore = props;

  function isboardfull() {

    for (var i = 0; i < localAIarrayscore.length; i++) {
      // console.log("  localAIarrayscore: " + localAIarrayscore[i]);
      // console.log(typeof localAIarrayscore[i]);

      if (typeof localAIarrayscore[i] === "number") {
        isfull = false;
        break;
      } else {
        isfull = true;
      }
    }

   
    console.log( " isfull: "  +  isfull);

  }

  isboardfull();



  return isfull;
}

export default AI;
