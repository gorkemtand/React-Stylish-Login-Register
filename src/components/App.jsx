import React from "react";
import Login from "./Login";
import Register from "./Register";
import SlidingCard from "./SlidingCard";

function App() {
  const [isChanged, setIsChanged] = React.useState(false);
  const [isLeft, setIsLeft] = React.useState(true);

  return (
    <div className="appContainer">
      <Login />

      <Register />

      <SlidingCard
        isChanged={isChanged}
        setIsChanged={setIsChanged}
        isLeft={isLeft}
        setIsLeft={setIsLeft}
      />
    </div>
  );
}

export default App;
