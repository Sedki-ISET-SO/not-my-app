import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "../Styles/Register.css";
import "../Styles/base.css";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
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
        <h6>User {name} successfully registered!!</h6>
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
        >
          <h6 style={{ textAlign: "center" }}>
            {" "}
            Please enter all the fields !
          </h6>
        </h6>
      </div>
    );
  };

  return (
    <div className="application">
      <Fragment>
        <Helmet>
          <title>QuizzTest-Register</title>
        </Helmet>
      </Fragment>
      <div id="login">
        <section>
          <div style={{ textAlign: "center" }}>
            <span className="cube">
              <Icon icon="mdi:cube-outline" width="100" />
            </span>
            <h2>
              <b>Register</b>
            </h2>
            <div>
              <div>
                <div className="messages">
                  {errorMessage()}
                  {successMessage()}
                </div>
                <form>
                  <div>
                    <label className="lable">
                      <b>Nom&nbsp;:&nbsp;</b>
                    </label>
                    <input
                      onChange={handleName}
                      className="input"
                      value={name}
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="lable">
                      <b>Email&nbsp;:&nbsp;</b>
                    </label>
                    <input
                      onChange={handleEmail}
                      className="input"
                      value={email}
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="lable">
                      <b>Mdp&nbsp;:&nbsp;</b>
                    </label>
                    <input
                      onChange={handlePassword}
                      className="input"
                      value={password}
                      type="password"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="play-button"
                    type="submit"
                  >
                    Submit
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
