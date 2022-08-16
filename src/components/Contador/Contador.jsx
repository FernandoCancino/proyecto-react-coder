import { useState } from "react"


const Contador = ({setCantidadProducto}) => {    
    const [count, modificarCount] = useState(1)
    const sumar = () => {
        modificarCount(count + 1)
    }
    const restar = () => {
        modificarCount(count - 1) 
    }
    const onAdd = () => {
        setCantidadProducto (count)
    }

    return (
        <>
            <div>
                <button onClick={restar} >Restar </button>
                <span> {count} </span>
                <button onClick={sumar} >Agregar </button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )

}

export default Contador 