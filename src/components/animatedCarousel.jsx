import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function AnimatedCarousel() {
  let height = 100;
  let slideWidth = 280 + 20;
  let transitionTime = 500;
  let infiniteScroll = true;
  let autoplay = false;
  let step = 2;
  let carouselWidth = 900;
  let amount = step * slideWidth;

  const [isScrolling, setIsScrolling] = useState(false);
  const [isLeftScroll, setIsLeftScroll] = useState(false);
  const [isRightScroll, setIsRightScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, setState] = useState([5, 6, 0, 1, 2, 3, 4]);

  const scrollLeft = () => {
    setIsScrolling(true);
    setIsLeftScroll(true);
    setTimeout(() => {
      setIsLeftScroll(false);
      setIsScrolling(false);
      //update the state magic
      setState([3, 4, 5, 6, 0, 1, 2]);
    }, transitionTime);
  };
  const scrollRight = () => {
    setIsScrolling(true);
    setIsRightScroll(true);

    setTimeout(() => {
      setIsRightScroll(false);
      setIsScrolling(false);
      //update the state magic
      setState([0, 1, 2, 3, 4, 5, 6]);
    }, transitionTime);
  };

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
      className={css`
        width: ${carouselWidth}px;
        display: flex;
        position: relative;
        margin-left: 200px;
        overflow: hidden;
      `}
    >
      <div
        className={css`
          display: flex;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.4);
          margin-left: ${-amount}px;
          ${isScrolling && `transition: ${transitionTime}ms;`}

          ${isScrolling && isLeftScroll && `margin-left:${0}px;`}
          ${isScrolling && isRightScroll && `margin-left:${-2 * amount}px;`}
        `}
      >
        {state.map((index) => (
          <Slide key={index} data={index}></Slide>
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
