import { Link } from "react-router-dom"

const Item = (productos) => {
    return (<div>
        <h1>nombre: ${productos.nombre}</h1>
        <h2>stock: ${productos.stock}</h2>
        <h3>descripción: ${productos.descripcion}</h3>
        <Link to={`/detalle/${productos.id}`}>
            <button className="btn btn-outline-secondary btn-block">
                Detalle
            </button>
        </Link>
    </div>
    )
}
export default Item 