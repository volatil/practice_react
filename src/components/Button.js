import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button className={props.laclase} onClick={props.onClick}>
      <span></span>
      <p>{props.texto}</p>
    </button>
  );
}

export default Button;
