import { useState, useContext} from "react"
import { CartContext } from "../CartContext/CartContext"


const Contador = ({setCantidadProducto, productoData}) => {    
    const {addToCart } = useContext (CartContext)

    const [count, modificarCount] = useState(1)

    const sumar = () => {
        modificarCount(count + 1)
    }

    const restar = () => {
        modificarCount(count - 1) 
    }

    const onAdd = () => {
        addToCart ({...productoData, count})
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