import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function AnimatedCarousel() {
  let height = 100;
  let slideWidth = 200;
  let transitionTime = 500;
  let infiniteScroll = true;
  let autoplay = false;
  let step = 2;
  let carouselWidth = 900;
  let amount = step*slideWidth;

  const [isScrolling,setIsScrolling] = useState(false);

  const carousel = useRef();

  const scrollLeft = () => { setIsScrollingLeft(true)};
  const scrollRight = () => {};

  let data = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
  ];

  return (
    <div
      id="carousel"
      ref={carousel}
      className={css`
        width: ${carouselWidth}px;
        display: flex;
        position: relative;
        margin-left: 200px;
      `}
    >
      <div
        className={css`
          display: flex;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.4);
          transition:${transitionTime}ms;

          ${isScrolling && `transform:translateX(${amount}px);`}
        `}
      >
        {
            data.map((item) => <Slide data={item}></Slide>)
        }
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
