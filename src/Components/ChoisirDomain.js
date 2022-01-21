import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import "../Styles/ChoisirDomain.css";
import "../Styles/base.css";
export default function ChoisirDomain() {
  return (
    <div className="application">
      <Fragment>
        <Helmet>
          <title>QuizzTest-Domain</title>
        </Helmet>
      </Fragment>
      <div id="home">
        <section>
          <div style={{ textAlign: "center" }}>
            <span className="cube">
              <Icon icon="mdi:cube-outline" width="200" />
            </span>
            <h2>
              {" "}
              <b>Choi-Domaine </b>
            </h2>
            <div>
              <a href="/react" type="button" className="React-button">
                React
              </a>
            </div>
            <br />
            <br />
            <div className="button">
              <a
                href="/angulaire"
                type="button"
                style={{ backgroundColor: "#66A5AD" }}
                className="angulair-button"
              >
                Angulaire
              </a>
            </div>
            <br />
            <br />
            <div className="button">
              <a
                href="/symfony"
                type="button"
                style={{ backgroundColor: "rgb(94, 93, 77)" }}
                className="symfony-button"
              >
                Symfony
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
