import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/home.sass";

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
          <Link to="/game" className="button is-link is-large">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
