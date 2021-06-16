import React, { useState } from "react";
import "./Landing.css";

export default function Landing() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    let textEntry = e.target.value;
    setEmail(textEntry);
  };
  return (
    <div className="landing">
      <div className="landing__headers">
        <h1 className="landing__header1">Welcome to</h1>
        <h1 className="landing__header2">
          Covenant University - Class of 2021 Yearbook
        </h1>
        <h1 className="landing__header3">The Resilient Set</h1>
      </div>
      <h1 className="landing__header4">Please enter your email address:</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="landing__form">
        <input
          placeholder="Email"
          className="landing__input"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <button className="landing__btn" type="submit">
          Submit
        </button>
      </form>
      <p className="landing__info">We will send you a link to open the book</p>
    </div>
  );
}
