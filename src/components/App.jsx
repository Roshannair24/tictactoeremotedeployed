import React from "react";
// import Clickme from "./Touchsquare.jsx";
import Grid from "./Grid.jsx";

///////////////////

////////////////////

function App() {
  const [playclick, setplayclick] = React.useState(false);
  // const[defgrid,setnewgrid]= React.useState([]);

  function playbuttonstate() {
    setplayclick(true);
  }

  function backbuttonstate() {
    setplayclick(false);
  }

  //   function Clickme(event) {
  //     console.log(event.target);
  //       console.log("touch me");

  // }

  return (
    <div>
      <h1>TIC TAC TOE</h1>

      {playclick === true ? (
        <Grid
        //  playbuttonclicked={Clickme}
        ></Grid>
      ) : null}

      <div
        className={
          playclick === true ? "clickedbuttondashboard" : "buttondashboard"
        }
      >
        {playclick === false ? (
          <button
            className="btn  btn-outline-primary     playbutt"
            onClick={playbuttonstate}
          >
            <i className="fa fa-play    icondim"></i>
          </button>
        ) : null}

        {playclick === true ? (
          <button
            className="btn btn-outline-primary              "
            onClick={backbuttonstate}
          >
            <span className="material-icons      icondim  ">restart_alt</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}

//////////////////////

export default App;
