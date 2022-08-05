import React from "react";
import { css } from "@emotion/css";

export default function Slide(props) {
  return (
    <div
      className={css`
        min-width: ${props.width||280}px;
        height: 200px;
        background: red;
        margin: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      `}
      id={props.id}
    >
      {props.data ?? "Nothing"}
    </div>
  );
}
