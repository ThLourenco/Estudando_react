import { useState } from "react"

useState

const UseData = () => {

    let someData = 10;

    const [anotherNumber, setAnotherNUmber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
            {/* Por baixo dos panos ele muda o valro do compenente porem como ele nao re renderiza o valor continua 10 na UI */}
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNUmber(20)}>Mudar state</button>
            {/* ao clicar vai re renderizar o valor para 20 */}
        </div>
    </div>
  )
}

export default UseData