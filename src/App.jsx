import { useState } from 'react';
import './App.css'
import Carousel from './components/carousel';

function App() {

  const [state,setState]= useState([0,1,2,3,4,5,6]);

  const step = 1;
  const width = 200;
  

  return (
  <Carousel/>
  )
}

export default App
