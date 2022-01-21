import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import "../Styles/Home.css";
import "../Styles/base.css";
export default function Home() {
  return (
    <div className="application">
      <Fragment>
        <Helmet>
          <title>QuizzTest-Home</title>
        </Helmet>
      </Fragment>
      <div id="home">
        <section>
          <div style={{ textAlign: "center" }}>
            <span className="cube">
              <Icon icon="mdi:cube-outline" width="200" />
            </span>

            <h1>
              <b>Quiz App</b>
            </h1>
            <div>
              <ul>
                <a href="/play" type="button" className="play-button">
                  Play
                </a>
              </ul>
            </div>
          </div>
          <div className="auth-container" style={{ textAlign: "center" }}>
            <a href="/Login" className="Login-button">
              Login
            </a>
            <a href="/register" className="Register-button">
              Register
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
