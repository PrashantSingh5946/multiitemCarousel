import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function Carousel() {
  let height = 165;
  let step = 2;
  let padding = 10;
  let width = 300;
  let background = "white";

  const carousel = useRef();

  const [index, setIndex] = useState(0);
  const data = [0, 1, 2, 3, 4, 5, 6];

  const scrollLeft = () =>{
 setIndex((index)=>Math.abs(index-step+data.length)%data.length);
  }

  const scrollRight = () =>{
    setIndex((index)=>Math.abs(index+step+data.length)%data.length);
  }

  useEffect(()=>{carousel.current.scrollTo(index*width,0)},[index]);
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

        overflow-y: hidden;
        margin: 10px;
        padding: 30px 0px;
        justify-content: space-between;
        position: relative;
      `}
    >
      <div
        ref={carousel}
        className={css`
          display: flex;
          overflow-x: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {data.map((slide, index) => (
          <Slide key={index} data={slide} id={index}></Slide>
        ))}
      </div>
      <div
        className={css`
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;
          align-items: center;
        `}
      >
        <button onClick={scrollLeft}>Left</button>
        <div
          className={css`width:auto;width: -webkit-fill-available;
}`}
        ></div>
        <button onClick={scrollRight}>Right</button>
      </div>
    </div>
  );
}
