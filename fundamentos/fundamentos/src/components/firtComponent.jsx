import { MyComponents } from "./MyComponents";

const FirstComponent = () => {
    return( //return com paranteses porq retorna objetos
        <div>
            <h2>Meu Primeiro Componente!</h2>
            <MyComponents/>
        </div>
    );
};

export default FirstComponent