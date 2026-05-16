import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

// iamgem em assets
// primeiro importa

import deviper from "./assets/imagedevipe.png";

import UseData from "./components/UseData";

import ListRender from "./components/ListRender";

import { ConditionalRender } from "./components/ConditionalRender";

import { ShowUserName } from "./components/ShowUserName";

import { CarDetails } from "../../fundamentos/CarDetails";

function App() {
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>React com imagem</h1>
      {/* 1- Imagem em public */}
      <img src="/imgdraco.png" alt="" />
      {/* 2 - imagem em assetws */}
      <img src={deviper} alt="" />
      {/* Use State */}
      <UseData />

      {/* List render */}
      <ListRender />
      {/* Rebder condicioanl*/}
      <ConditionalRender />

      {/* props */}
      {/* para definir uma propriedade temos que colocar o name=""
      lembrando que o nome da propriedade deve ser igual a que definamos no arquivo jsx */}
      <ShowUserName name="thiago"/>

        {/* Desestruturando props */}     
        <CarDetails brand="vw" km={999} color="preto"/>

        {/* Reaproveitando componentes */}
         <CarDetails brand="fiat" km={999} color="preto"/>
         <CarDetails brand="bmw" km={229} color="branco"/>
         <CarDetails brand="gol" km={339} color="vermehlo"/>

    </div>
  );
}

export default App;
