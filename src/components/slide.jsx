import React from "react";
import { css } from "@emotion/css";

export default function Slide(props) {
  return (
    <div
      className={css`
        min-width: 280px;
        height: 140px;
        background: red;
        margin:30px;
        border: 2px solid black;
        display:flex;
        justify-content:center;
        align-items:center;
      `}
    >
      {props.data??"Nothing"}
    </div>
  );
}
