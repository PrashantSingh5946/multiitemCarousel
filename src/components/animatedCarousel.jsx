import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import Slide from "./slide";

export default function AnimatedCarousel() {
  let data = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
  ];

  let height = 100;
  let slideWidth = 280 + 20;
  let transitionTime = 500;
  let infiniteScroll = true;
  let autoplay = false;
  let step = 2;
  let carouselWidth = 900;
  let numberOfSlides = Math.floor(carouselWidth / slideWidth);
  let amount = step * slideWidth;
  let totalItems = numberOfSlides + 2 * step;

  const [isScrolling, setIsScrolling] = useState(false);
  const [isLeftScroll, setIsLeftScroll] = useState(false);
  const [isRightScroll, setIsRightScroll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, setState] = useState([]);

  useEffect(()=> {
    setState([...generateState(activeIndex,step,data.length,numberOfSlides)]);
  },[activeIndex])

  const generateState =(currentIndex,step,length,numberOfSlides) =>{
    let arr = [];
      if(length===0){
        return [];
      }
  
      //calculate the first hidden ones
      for(let i=1;i<=step;i++)
        {
          arr.unshift((currentIndex-i)%length);
        }
  
      for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
          arr[i] = arr[i] + length;
        }
      }
  
      let arr2=[];
      //central vista
      for(let i=0;i<numberOfSlides;i++){
        arr2.push((i+currentIndex)%length);
      }
  
      let base = arr2[arr2.length-1];
      let arr3 = [];
      //ending
      for(let i=1;i<=step;i++){
        arr3.push((i+base)%length);
      }
      console.log(arr);
      console.log(arr2);
      console.log(arr3);
  
      return[...arr,...arr2,...arr3];
  
    }
  

  

  const scrollLeft = () => {
    setIsScrolling(true);
    setIsLeftScroll(true);

    setTimeout(() => {
      setIsLeftScroll(false);
      setIsScrolling(false);
      //update the index
      setActiveIndex((activeIndex-step)>=0?(activeIndex-step):((activeIndex-step)%data.length)+data.length);
    }, transitionTime);
  };


  const scrollRight = () => {
    setIsScrolling(true);
    setIsRightScroll(true);

    setTimeout(() => {
      setIsRightScroll(false);
      setIsScrolling(false);
      //update the state magic
      setActiveIndex((activeIndex + step) % data.length);
    }, transitionTime);
  };

  
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
        {state.map((index,seq) => (
          <Slide key={seq} data={data[index]}></Slide>
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
