import { useState } from "react";

export default function Welcome(props) {

    const { message, name } = props;
    const [ counter, setCounter ] = useState(0);

    return (
        <div>
            <h1>Hola {name}</h1>
            <p>{message}</p>
            <h3>Contador de React con Hooks {counter}</h3>
            <button class="" onClick={() => setCounter(counter + 1)}>Contar</button>
        </div>
    )
}