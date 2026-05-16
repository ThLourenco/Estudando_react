import { Children, useState } from "react";
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

import { FragmentsUI } from "./components/FragmentsUI";
import { Container } from "./components/Container";

import { ExecuteFunction } from "./components/ExecuteFunction";

import { Message } from "./components/Message";

import { ChangeMessage } from "./components/ChangeMessage";
 {/* Renderizaçao de lsita com componentes */}
const cars = [
  {id:1, brand:"ferrari", color:"amarelo", KM: 0},
  {id:2, brand:"gol", color:"vermelho", KM: 0},
  {id:3, brand:"porsh", color:"azul", KM: 0}
]


function App() {

  function showMessage(){
    console.log("myfunciton")
  } 

  //state lift
  const [message, setmessage] = useState("")
  
  const handleMessage = (msg) => {
    setmessage(msg);
  };

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

         {/* Renderizaçao de lsita com componentes */}
         {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.KM}/>
         ))}


         {/* Dois elementos pais */}
         <FragmentsUI/>

         {/* Children */}
         {/* oque esta escrito no p aparece em baixo do h1 que estabeleci no arquivo jsx */}
         <Container> <p>alguma coisa</p>
         <p>Outra coisa</p>
         </Container>

         
         {/* Funçao em prop*/}
         <ExecuteFunction myFunction={showMessage}/>

         
         {/* state lift*/}
         <Message msg={message}/>
         <ChangeMessage handleMessage={handleMessage}/>

    </div>
  );
}

export default App;
