import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import "../Styles/Play.css";
import "../Styles/base.css";
export default function Play() {
  return (
    <div className="application">
      <Fragment>
        <Helmet>
          <title>QuizzTest-Play</title>
        </Helmet>
      </Fragment>
      <div id="home">
        <section>
          <div style={{ textAlign: "center" }}>
            <span className="cube">
              <Icon icon="mdi:cube-outline" width="200" />
            </span>

            <h1>
              <b>Play</b>
            </h1>
            <div className="button">
              {" "}
              <a href="/start" type="button" className="play-button">
                Start Quizz
              </a>
            </div>
            <br />
            <br />
            <div className="button">
              <a
                href="/ajouterQuiz"
                type="button"
                style={{ backgroundColor: "#66A5AD" }}
                className="AjouterQ-button"
              >
                Ajouter Quizz
              </a>
            </div>
            <br />
            <br />
            <div className="button">
              <a
                href="/home"
                type="button"
                style={{ backgroundColor: "rgb(94, 93, 77)" }}
                className="Home-button"
              >
                Home
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
