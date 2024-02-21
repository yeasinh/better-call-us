import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = (
  {
    /*submitForm */
  }
) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    //submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="main-title">Create your own account here</h1>

        <div className="form-inputs">
          <label className="form-label" htmlFor="username">
            Username
          </label>

          <input
            id="username"
            type="text"
            className="form-input"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

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
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            Confirm password
          </label>

          <input
            id="password2"
            type="password"
            className="form-input"
            name="password2"
            placeholder="Enter your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-signup-btn" type="submit">
          SignUp
        </button>
        <div className="input-login-link">
          Already have an account?<a href="/login">Login here</a>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
