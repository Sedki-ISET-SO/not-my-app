import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "../Styles/AjouterQuiz.css";
import "../Styles/base.css";
export default function AjouterQuiz() {
  const [Domain, setDomain] = useState(["React", "Angulaire", "Symfony"]);
  const [Question, setQuestion] = useState("");
  const [Choixs, setChoix] = useState([]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChoix = (e) => {
    setChoix([...Choixs]);
    setSubmitted(false);
  };

  const handleDomain = (e) => {
    setDomain(e.target.value);
    setSubmitted(false);
  };

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Domain[0] === "" ||
      Domain[1] === "" ||
      Domain[2] === "" ||
      Choixs.length === 0 ||
      Question === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h6>{Domain} successfully registered!!</h6>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h6
          className="alert alert-danger d-flex align-items-center"
          role="alert"
          style={{ textAlign: "center" }}
        >
          Please enter all the fields !
        </h6>
      </div>
    );
  };

  return (
    <div className="application">
      <Fragment>
        <Helmet>
          <title>QuizzTest-ajouter</title>
        </Helmet>
      </Fragment>
      <div id="login">
        <section>
          <div style={{ textAlign: "center" }}>
            <span className="cube">
              <Icon icon="mdi:cube-outline" width="100" />
            </span>
            <h3>
              <b>Ajouter Quizz</b>
            </h3>
            <div>
              <div>
                <div className="messages">
                  {errorMessage()}
                  {successMessage()}
                </div>
                <form>
                  <div>
                    <select className="Select-f">
                      <option selected>Choisir un Domaine</option>

                      <option onChange={handleDomain} value={Domain[0]}>
                        {Domain[0]}
                      </option>

                      <option onChange={handleDomain} value={Domain[1]}>
                        {Domain[1]}
                      </option>

                      <option onChange={handleDomain} value={Domain[2]}>
                        {Domain[2]}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="lable-f">
                      <b>Question&nbsp;:&nbsp;</b>
                    </label>
                    <input
                      onChange={handleQuestion}
                      className="input"
                      value={Question}
                      type="text"
                    />
                  </div>
                  <div>
                    <div>
                      <label className="lable-f">
                        <b>Choixs&nbsp;:&nbsp;</b>
                      </label>
                    </div>
                    <input
                      onChange={handleChoix}
                      className="input"
                      value={Choixs[0]}
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleChoix}
                      className="input"
                      value={Choixs[1]}
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleChoix}
                      className="input"
                      value={Choixs[2]}
                      type="text"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="play-button"
                    type="submit"
                  >
                    Ajouter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
