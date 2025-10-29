import React from "react";

interface Props {
  nameBtn: string;
  color?: string;
}

function FuncClick({ nameBtn, color = "primary" }: Props) {
  function clickHandler() {
    console.log("Button clicked");
  }

  return (
    // <div className="item">
    <div>
      {/* <button className={"btn btn-" + color} onClick={clickHandler}> */}
      <button className="btn-style" onClick={clickHandler}>
        {nameBtn}
      </button>
    </div>
  );
}

export default FuncClick;
