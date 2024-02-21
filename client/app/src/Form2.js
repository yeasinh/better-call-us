import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import FormCss from "./Form.css";
import { Link } from "react-router-dom";
import FormLogin from "./FormLogin";

const Form2 = () => {
  //   const [isSubmitted, setIsSubmitted] = useState(false);

  //   function submitForm() {
  //     setIsSubmitted(true);
  //   }
  return (
    <div className="form-container">
      <span className="close-btn">
        <Link to="/">x</Link>
      </span>
      <div className="form-content-left">
        <img src="login.jpg" alt="Some pic" className="form-img" />
      </div>
      <FormLogin />
    </div>
  );
};

export default Form2;
