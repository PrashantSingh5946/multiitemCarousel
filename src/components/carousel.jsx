import React, { useState } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function Carousel() {
  let height = 165;
  let step = 1;
  let padding = 10;
  let width = 300;
  let background = "white";

  const [index, setIndex] = useState(0);
  const data = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div
      className={css`
        font-size: 24px;
        max-height: ${height}px;
        background: ${background};
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100vw;
        color: black;
        overflow-x: scroll;
        overflow-y: hidden;
        margin: 10px;
        padding: 30px 0px;
        justify-content: space-between;
        ::-webkit-scrollbar {
          display: none;
        }
        
      `}
    >
      <div
        className={css`
        display:flex;
        `}
      >
        {data.map((slide, index) => (
          <Slide key={index} data={slide}></Slide>
        ))}
      </div>
    </div>
  );
}
