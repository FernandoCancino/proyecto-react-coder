import { useState} from "react"
import { Link } from "react-router-dom"
import Contador from "../Contador/Contador"


const ItemDetail = ({productos}) => {

   const [cantidadProducto, setCantidadProducto] = useState(1)


    return (
        <div className="row">
            <div className="col.md-6">
                <h2>nombre: {productos.nombre}</h2>
                <h3>descripción: {productos.descripcion}</h3>
                <h4>stock: {productos.stock}</h4>
                
                { cantidadProducto > 1 ?<Link to="/cart"> <button>Comprar</button> </Link> : < Contador setCantidadProducto = {setCantidadProducto} productoData = {productos} />  }                        
            </div> 
        </div>
    )

}
export default ItemDetail