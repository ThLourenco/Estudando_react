import React from 'react'

export const Events = () => {

    const handleClick = (e) => {
        console.log(e);
       console.log("executou") ;
    }

    //funçao de renderizaçao
    const renderSomething = (x) => {
        if(x){
            return <h1>Rederizando isso</h1>
        }else {
            return  <h1>Renderizando outra coisa</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => { //forma mais simples de fazer evento
                console.log("testando um evento")
            }}>Click aqui</button>
        </div>
        {/* Evento com funçao*/}
        <div>
            <button onClick={handleClick}>Click com chamada do evento</button>
        </div>
            {renderSomething(true)}
            {renderSomething(false)}
    </div>
  )
}
