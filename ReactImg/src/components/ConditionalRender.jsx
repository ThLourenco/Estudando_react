import React from "react";

export const ConditionalRender = () => {
  const x = true;

  const name = "Thiago";

  return (
    <div>
      {/* Render Condicioanl */}
      <h3>Isso sera exibido?</h3>
      {x && <p>se X for true sim</p>}{" "}
      {/* se isso for verdade faça isso daqui isso que quer dizerr essa opreaçao */}
      {/* Render else */}
      {/* Fica desta  forma: condiaçao ? execuçao 1 : execuaço 2*/}
      {name === "joao" ?
       (<div>
        <p>Olá Joao</p>
      </div>) 
      : (<div>
        <p>meu nome é {name}, nome nao encontrado</p>
      </div>)}
    </div>
  );
};
