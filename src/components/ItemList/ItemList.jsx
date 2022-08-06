import { useEffect, useState } from "react";
import { getFetch } from "../../../helpers/getFetch";

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch() // llamada a la api
    .then((resp) => {
            setProductos(resp)
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    console.log(productos)
} 

return (
    <div>
        {productos.map (productos => <li key={producto.id} > </li></li>)}
    </div>
)
export default ItemList
