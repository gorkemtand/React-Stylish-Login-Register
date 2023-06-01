import React from "react";

function Input(props) {
  return (
    <div className={"inputWrapper"}>
      {props.icon && <div className={"icon"}>{props.icon}</div>}
      <input type={props.text} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
