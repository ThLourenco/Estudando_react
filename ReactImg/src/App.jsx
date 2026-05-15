import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


// iamgem em assets
// primeiro importa

import deviper from "./assets/imagedevipe.png"

import  UseData from './components/UseData'


function App() {
  
  return (
    <div className='App' style={{paddingBottom: "500px"}}> 
    <h1>React com imagem</h1>
    {/* 1- Imagem em public */}
    <img src="/imgdraco.png" alt="" />
    {/* 2 - imagem em assetws */}
    <img src={deviper} alt="" />
    {/* Use State */}
    <UseData/>
    </div>
  );
}

export default App
