import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function Carousel() {
  let height = 165;
  let step = 2;
  let width = 300;
  let transitionTime = 500;
  let infiniteScroll = false;
  let background = "white";

  const carousel = useRef();

  const [index, setIndex] = useState(0);
  const data = [0, 1, 2, 3, 4, 5, 6];

  const scrollLeft = () => {
    if (infiniteScroll) {
      setIndex((index) =>
        index >= step ? index - step : index - step + data.length
      );
    } else {
      if(index>=step){
        setIndex(index-step);
      }
      else{
        setIndex(0);
      }
    }
  };

  const scrollRight = () => {
    if (infiniteScroll) {
      setIndex((index) => (index + step) % data.length);
    }else{
      if((index+step)>data.length){
        setIndex(data.length-1);
      }
      else{
        setIndex((index)=>index+step);
      }
    }
  };

  useEffect(() => {
    carousel.current.scrollTo(index * width, 0);
  }, [index]);
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
