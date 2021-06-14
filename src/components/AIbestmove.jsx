import React from "react";
import Checkforwinningcomb from "./Winningcombination.jsx";

let currentconfiguraton;
let finalmove;

function aimakesmove(props) {
  currentconfiguraton = props;
  let prefinalmove = null;

  console.log("currentconfiguraton to check  is: " + currentconfiguraton);

  function blindmove() {
    console.log("blind move initiated ");

    let filteredconfiguraion = currentconfiguraton.filter(function (
      currentitem,
      index,
      currentconfiguraton
    ) {
      // console.log("currentitem is: " + currentitem);
      // console.log("currentitem typeof is: " + typeof currentitem);

      // console.log("index is: " + index);

      return typeof currentitem === "number";
    });

    console.log("filteredconfiguraion is: " + filteredconfiguraion);
    console.log(
      "filteredconfiguraion  length is: " + filteredconfiguraion.length
    );

    prefinalmove = Math.floor(Math.random() * filteredconfiguraion.length);

    console.log("prefinalmove is: " + prefinalmove);
    console.log(
      "filtered array value is: " + filteredconfiguraion[prefinalmove]
    );

    //prefinalmove is the index of the chosen value from the filtered combination

    finalmove = filteredconfiguraion[prefinalmove];
  }

  function optimalmastermove() {
    let localoptimalwinningobj = {
      hasAnyoneWon: false,
      winningnumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };

    console.log("optimal master move initiated ");

    // “Is this action is getting me a high score or a low score ?”.

    let filteredconfiguraion = currentconfiguraton.filter(function (
      currentitem,
      index,
      currentconfiguraton
    ) {
      // console.log("currentitem is: " + currentitem);
      // console.log("currentitem typeof is: " + typeof currentitem);

      // console.log("index is: " + index);

      return typeof currentitem === "number";
    });

    console.log("filteredconfiguraion is: " + filteredconfiguraion);
    console.log(
      "filteredconfiguraion  length is: " + filteredconfiguraion.length
    );

    if (
      filteredconfiguraion.length <= 6
      // filteredconfiguraion.length >= 10
    ) {
      console.log(
        "6 empty spaces remaining, optimal master move process initiated "
      );

      let score;

      //now ai will assume X one by one at every empty space, and checks whether it finds a winning combination for X. if it does , score is -10.,
      //as ai is losing at that score.

      for (var i = 0; i < filteredconfiguraion.length; i++) {
        let tempXplace = filteredconfiguraion[i];

        let originalemptyspaceevalue = tempXplace;

        currentconfiguraton[tempXplace] = "X";

        let assumedcurrentconfiguraton = currentconfiguraton;

        console.log(
          "  temp current config with assumed X space: " +
            assumedcurrentconfiguraton
        );

        let tocheckfor = "X";

        localoptimalwinningobj = Checkforwinningcomb(
          assumedcurrentconfiguraton,
          tocheckfor
        );

        console.log(
          "localoptimalwinningobj.hasAnyoneWon: " +
            localoptimalwinningobj.hasAnyoneWon
        );

        if (localoptimalwinningobj.hasAnyoneWon === true) {
          score = -10;
          //index for chosen place for x from thee fileted array
          prefinalmove = i;

          console.log(
            "potential winning combination found at  " +
              localoptimalwinningobj.winningnumbers
          );

          break;
        } else {
          currentconfiguraton[originalemptyspaceevalue] =
            originalemptyspaceevalue;
        }
      }

      if (score === -10) {
        console.log("score is -10: ");
      } else {
        prefinalmove = Math.floor(Math.random() * filteredconfiguraion.length);
      }
    } else {
      prefinalmove = Math.floor(Math.random() * filteredconfiguraion.length);

      console.log("prefinalmove is: " + prefinalmove);
      console.log(
        "filtered array value is: " + filteredconfiguraion[prefinalmove]
      );
    }

    //prefinalmove is the index of the chosen value from the filtered combination
    //finalmove is the final filtered array value

    finalmove = filteredconfiguraion[prefinalmove];
  }

  var probabilityvar = Math.floor(Math.random() * 100);

  console.log(probabilityvar);

  if (probabilityvar <= 1) {
    blindmove();
  } else {
    console.log("lol");
    optimalmastermove();
  }

  //finalmove is the final filtered array value

  return finalmove;
}

export default aimakesmove;
