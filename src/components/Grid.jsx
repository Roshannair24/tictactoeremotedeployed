import React from "react";
// import Xv1 from "./../icons/xv1-01.svg";

import Xv1 from "./../icons/xv1purp.png";

import Xv1green from "./../icons/xv1greenglow3.png";

import Xv2 from "./../icons/xv1purpcirc.png";
import Xv2orange from "./../icons/xv1orangeglowcirc.png";

import SQUARE from "./SQUARE.jsx";

import Checkforwinningcomb from "./Winningcombination.jsx";

import AI from "./AI.jsx";
import aimakesmove from "./AIbestmove.jsx";

let masterisboardfull;

let aireturnedindex;
let tocheckfor;

// let hasAnyoneWon;

let masterwinningobj = {
  hasAnyoneWon: false,
  winningnumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
};

function Grid(props) {
  /////trigger state
  const [gridsquareclicked, setgridsquare] = React.useState(false);
  // const [gridsquareclickedid, newgridsquareclickedid] = React.useState(" ");

  ///////state to keep tab on configuration
  const [arrayscore, setarrayscore] = React.useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  //////state to set turn
  const [turn, setTurn] = React.useState("Human");

  /////state to check  board full
  const [boardfull, setboardfull] = React.useState(false);

  function Clickme(event) {
    console.log("yooooo");

    console.log(event.target);
    console.log(event.target.id);
    console.log("typeof: " + typeof arrayscore[event.target.id]);

    if (typeof arrayscore[event.target.id] !== "number") {
      console.log("its  already filled ");
    } else {
      /////////////human has to input the empty square with cross, after which  the ai  will check for winnning combination.

      setarrayscore((prevArray) => {
        console.log("prevArray: " + prevArray);

        prevArray.forEach(myFunction);

        function myFunction(item, index, theArray) {
          // console.log("item: " + item);
          // console.log("index: " + index);

          theArray[index] = index == event.target.id ? "X" : item;
        }

        console.log("prevArray after: " + prevArray);

        /////this is where ai should check for winning combination

        // hasAnyoneWon = Checkforwinningcomb(prevArray);

        //set value to check for
        tocheckfor = "X";

        // masterwinningobj = Checkforwinningcomb(prevArray);
        masterwinningobj = Checkforwinningcomb(prevArray, tocheckfor);

        masterwinningobj.winningnumbers = modifymasterwinningobj(
          masterwinningobj.winningnumbers,
          "X"
        );

        console.log(
          "masterwinningobj.hasAnyoneWon: " + masterwinningobj.hasAnyoneWon
        );

        console.log(
          "masterwinningobj.winningnumbers new: " +
            masterwinningobj.winningnumbers
        );

        if (masterwinningobj.hasAnyoneWon === true) {
          /////show winner play animation and
          ///reset game
          gamereset();
        }

        return prevArray;
      });

      console.log("after:");

      console.log("arrayscore: " + arrayscore);
      // console.log("arrayscore[0]: " + arrayscore[0]);
      // console.log("arrayscore[1]: " + arrayscore[1]);

      setTurn("AI");
    }

    /////this is where ai should check for winning combination

    // hasAnyoneWon = Checkforwinningcomb(arrayscore);

    // console.log("hasAnyoneWon: " + hasAnyoneWon);

    setgridsquare((prevValue) => !prevValue);
  }

  function AIplay() {
    console.log("its AIs turn now");

    masterisboardfull = AI(arrayscore);

    console.log("masterisboardfull: " + masterisboardfull);

    ///if the masterboard is full true, then ai will check for won the game,  else  if the master board is full false, then
    // ai has to return current index of "O"

    if (masterisboardfull === true) {
      //reset game

      gamereset();
    } else {
      //if empty spaces remaining then AI has to check for who won and  return index of "O" on  empty squares
      console.log("masterisboardfull is not full yet");

      aireturnedindex = aimakesmove(arrayscore);

      console.log("aireturnedindex: " + aireturnedindex);

      arrayscore[aireturnedindex] = "O";

      console.log("board after ai move: " + arrayscore);

      ////after ai makes the move , it has to check whether has it won or not
      ///if it has won , reset the game.

      //set value to check for
      tocheckfor = "O";

      masterwinningobj = Checkforwinningcomb(arrayscore, tocheckfor);

      masterwinningobj.winningnumbers = modifymasterwinningobj(
        masterwinningobj.winningnumbers,
        "O"
      );

      console.log(
        "masterwinningobj.hasAnyoneWon: " + masterwinningobj.hasAnyoneWon
      );

      console.log(
        "masterwinningobj.winningnumbers new: " +
          masterwinningobj.winningnumbers
      );

      if (masterwinningobj.hasAnyoneWon === true) {
        /////show winner play animation and
        ///reset game
        gamereset();
      }

      setTurn("Human");
    }
  }

  if (turn === "AI") {
    setTimeout(function () {
      AIplay();
    }, 500);
  }

  function gamereset() {
    setTurn("Human");

    console.log("masterisboardfull is: " + masterisboardfull);

    setTimeout(function () {
      console.log("game about to reset ");

      masterwinningobj = {
        hasAnyoneWon: false,
        winningnumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      };

      console.log(
        " masterwinningobj.winningnumbers: " + masterwinningobj.winningnumbers
      );

      setarrayscore([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 1500);
  }

  function modifymasterwinningobj(arraytocheck, mastertoken) {
    let modifiedlocalarray = arraytocheck;

    modifiedlocalarray.forEach(myFunction);

    function myFunction(item, index, theArray) {
      // console.log("item: " + item);
      // console.log("index: " + index);

      if (mastertoken === "X") {
        if (item === "Win") {
          theArray[index] = "WinX";
        }
      } else if (mastertoken === "O") {
        if (item === "Win") {
          theArray[index] = "WinO";
        }
      }
    }

    return modifiedlocalarray;
  }

  return (
    <div className="position">
      <div id="container">
        <div id="0" onClick={Clickme}>
          {/* {masterwinningobj.winningnumbers[0] === "WinX" && (
            <img src={Xv1green} alt="X" className="imageingridsquare"></img>
          )} */}

          {arrayscore[0] == "X" ? (
            masterwinningobj.winningnumbers[0] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[0] == "O" ? (
            masterwinningobj.winningnumbers[0] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>

        <div id="1" onClick={Clickme}>
          {arrayscore[1] == "X" ? (
            masterwinningobj.winningnumbers[1] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[1] == "O" ? (
            masterwinningobj.winningnumbers[1] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="2" onClick={Clickme}>
          {arrayscore[2] == "X" ? (
            masterwinningobj.winningnumbers[2] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[2] == "O" ? (
            masterwinningobj.winningnumbers[2] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="3" onClick={Clickme}>
          {arrayscore[3] == "X" ? (
            masterwinningobj.winningnumbers[3] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[3] == "O" ? (
            masterwinningobj.winningnumbers[3] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="4" onClick={Clickme}>
          {arrayscore[4] == "X" ? (
            masterwinningobj.winningnumbers[4] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[4] == "O" ? (
            masterwinningobj.winningnumbers[4] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="5" onClick={Clickme}>
          {arrayscore[5] == "X" ? (
            masterwinningobj.winningnumbers[5] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[5] == "O" ? (
            masterwinningobj.winningnumbers[5] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="6" onClick={Clickme}>
          {arrayscore[6] == "X" ? (
            masterwinningobj.winningnumbers[6] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[6] == "O" ? (
            masterwinningobj.winningnumbers[6] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="7" onClick={Clickme}>
          {arrayscore[7] == "X" ? (
            masterwinningobj.winningnumbers[7] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[7] == "O" ? (
            masterwinningobj.winningnumbers[7] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
        <div id="8" onClick={Clickme}>
          {arrayscore[8] == "X" ? (
            masterwinningobj.winningnumbers[8] === "WinX" ? (
              <img src={Xv1green} alt="X" className="imageingridsquare"></img>
            ) : (
              <img src={Xv1} alt="X" className="imageingridsquare"></img>
            )
          ) : null}

          {arrayscore[8] == "O" ? (
            masterwinningobj.winningnumbers[8] === "WinO" ? (
              <img src={Xv2orange} alt="O" className="imageingridsquare"></img>
            ) : (
              <img src={Xv2} alt="O" className="imageingridsquare"></img>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Grid;
