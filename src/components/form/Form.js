import React from "react";
import "./Form.css";

function Form({ children, title }) {
  return (
    <div className="form">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Form;
