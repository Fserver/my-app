import { useEffect, useState } from "react";

export default function Welcome(props) {

    const { message, name } = props
    const [ semaforo , setSemaforo ] = useState(false)
    const [ counter, setCounter ] = useState(0)
    const [ counter2, setCounter2 ] = useState(0)

    useEffect(()=>{
        console.log("Semaforo cambio de estado a ",{semaforo});
    }, [semaforo])

    const contar = () => {
        setCounter2(counter2+1)
        setSemaforo(!semaforo)
    }

    return (
        <div>
            <h1>Hola {name}</h1>
            <p>{message}</p>
            <h3>Contador de React con Hooks {counter}</h3>
            <h3>Contador Hooks Use Efects {counter2}</h3>
            <h3>Semaforo en {semaforo ? 'Rojo' : 'Verde'}</h3>
            <button onClick={() => setCounter(counter + 1)}>Contar</button>
            <button onClick={contar}>Contar2</button>
        </div>
    )
}