import { getFetch } from "../../helpers/getFetch"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    const [productos, setProducto] = useState({})
 
    const {id} = useParams ()

    useEffect(() => {
        getFetch()
            .then((resp) => setProducto(resp.find(productos => productos.id === id)))
            .catch(err => console.log(err))
    }, [])


    
    return <ItemDetail productos = {productos} />
}

export default ItemDetailConteiner

