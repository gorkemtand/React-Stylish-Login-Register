import React from "react";

function SlidingCard({ isChanged, setIsChanged, isLeft, setIsLeft }) {
  const loginPaheseTexts = {
    title: "Hello, Friend!",
    description: "Enter your personal details and start jurney with us.",
    button: "Sign Up"
  };

  const registerPhaseTexts = {
    title: "Welcome Back",
    description:
      "To keep connecting with us please login with your personal info.",
    button: "Sign In"
  };

  const texts = isChanged ? registerPhaseTexts : loginPaheseTexts;

  function handleClick(event) {
    setIsChanged(!isChanged);
  }

  const handlePosition = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className={`slidingContainer ${isLeft ? "slideRight" : "slideLeft"}`}>
      <h1>{texts.title}</h1>
      <p>{texts.description}</p>
      <button
        className={"custom-btn btn-sliding"}
        onClick={() => {
          handleClick();
          handlePosition();
        }}
      >
        {texts.button}
      </button>
    </div>
  );
}

export default SlidingCard;
