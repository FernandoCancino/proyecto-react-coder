import { useState } from "react"


const Contador = () => {
    const [count, modificarCount] = useState(1)
    function sumar() {
        modificarCount(count + 1)
    }
    function restar() {
        modificarCount(count - 1)
    }
    return (
        <div>
            <h2> La cantidad de artículos es = {count} </h2>
            <button onClick={sumar} >Click </button>
            <button onClick={restar} >Click </button>
        </div>
    )

}

export default Contador