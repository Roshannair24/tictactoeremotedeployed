// import React from "react";

// let localistherewinningcomb = false;

function Checkforwinningcomb(props, propsb) {
  console.log("local props: " + props);
  console.log("local propsb: " + propsb);

  let localwinningobj = {
    hasAnyoneWon: false,
    winningnumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };
  console.log(
    "localwinningobj.winningnumbers: " + localwinningobj.winningnumbers
  );

  let arraytocheckfor = props;

  let token = propsb;

  //token is value to check for, X or O

  console.log("checking for winning combination initiated: " + arraytocheckfor);

  function tokenvaluechecker(token) {
    if (
      // verticals
      arraytocheckfor[0] === token &&
      arraytocheckfor[1] === token &&
      arraytocheckfor[2] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[0] = "Win";
      localwinningobj.winningnumbers[1] = "Win";
      localwinningobj.winningnumbers[2] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      arraytocheckfor[3] === token &&
      arraytocheckfor[4] === token &&
      arraytocheckfor[5] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[3] = "Win";
      localwinningobj.winningnumbers[4] = "Win";
      localwinningobj.winningnumbers[5] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      arraytocheckfor[6] === token &&
      arraytocheckfor[7] === token &&
      arraytocheckfor[8] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[6] = "Win";
      localwinningobj.winningnumbers[7] = "Win";
      localwinningobj.winningnumbers[8] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      // horizontals

      arraytocheckfor[0] === token &&
      arraytocheckfor[3] === token &&
      arraytocheckfor[6] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[0] = "Win";
      localwinningobj.winningnumbers[3] = "Win";
      localwinningobj.winningnumbers[6] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      arraytocheckfor[1] === token &&
      arraytocheckfor[4] === token &&
      arraytocheckfor[7] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[1] = "Win";
      localwinningobj.winningnumbers[4] = "Win";
      localwinningobj.winningnumbers[7] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      arraytocheckfor[2] === token &&
      arraytocheckfor[5] === token &&
      arraytocheckfor[8] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[2] = "Win";
      localwinningobj.winningnumbers[5] = "Win";
      localwinningobj.winningnumbers[8] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      // diagonals
      arraytocheckfor[0] === token &&
      arraytocheckfor[4] === token &&
      arraytocheckfor[8] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[0] = "Win";
      localwinningobj.winningnumbers[4] = "Win";
      localwinningobj.winningnumbers[8] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else if (
      arraytocheckfor[2] === token &&
      arraytocheckfor[4] === token &&
      arraytocheckfor[6] === token
    ) {
      console.log("yay i won ");

      localwinningobj.hasAnyoneWon = true;

      localwinningobj.winningnumbers[2] = "Win";
      localwinningobj.winningnumbers[4] = "Win";
      localwinningobj.winningnumbers[6] = "Win";

      console.log(
        "localwinningobj.winningnumbers new: " + localwinningobj.winningnumbers
      );

      return localwinningobj;
    } else {
      localwinningobj.hasAnyoneWon = false;

      return localwinningobj;
    }
  }

  if (token === "X") {

    console.log("chhecking  local winning obj for X: ");


    localwinningobj = tokenvaluechecker("X");




  } else if (token === "O") {

    console.log("chhecking  local winning obj for O: ");

    localwinningobj = tokenvaluechecker("O");
  }

  return localwinningobj;
}

export default Checkforwinningcomb;
