import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormLogin = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1 className="headline">
          Enter into our system providing the informations below
        </h1>

        {/* <div className="form-inputs">
          <label className="form-lable" htmlFor="username">
            Username
          </label>

          <input
            id="username"
            type="text"
            className="form-input"
            name="username"
            placeholder="Enter your username"
          />
        </div> */}

        <div className="form-inputs">
          <label className="form-label" htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            className="form-input"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            password
          </label>

          <input
            id="password"
            type="password"
            className="form-input"
            name="password"
            placeholder="Enter your Password"
          />
        </div>

        {/* <div className="form-inputs">
          <label className="form-lable" htmlFor="password">
            Confirm password
          </label>

          <input
            id="password2"
            type="password"
            className="form-input"
            name="password2"
            placeholder="Enter your password"
          />
        </div> */}

        <button className="form-signup-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
