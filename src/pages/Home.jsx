import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

import "../styles/pages/home.css";

function Home() {

  return (
    <div className="home">
      <div className="container">
        <h1 className="container__title">Rick and Morthy</h1>
        <div className="container__description">
          <p className="container__description--p">
            You have to find all pairs before your time runs out. Every Time you
            find a pair you will get 30 seconds at your time.
          </p>
        </div>
        <div className="container__description--button">
            <Button variant="text" style={{backgroundColor: purple['500'], fontSize: 16, color:'#ffffff'}} component={Link} to="/game" size="large">
              Play
            </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
