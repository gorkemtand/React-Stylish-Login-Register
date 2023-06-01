import React from "react";

function Input(props) {
  return (
    <div className={"inputWrapper"}>
      {props.icon && <div className={"icon"}>{props.icon}</div>}
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
