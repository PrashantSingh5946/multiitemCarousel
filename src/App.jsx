import { useState } from "react";
import "./App.css";
import AnimatedCarousel from "./components/animatedCarousel";
import Carousel from "./components/carousel";

function App() {
  return (
    <>
      <Carousel />
      <AnimatedCarousel />
    </>
  );
}

export default App;
