import { getFetch } from "../../helpers/getFetch"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConteiner = () => {
    const [productos, setProducto] = useState({})
    useEffect(() => {
        getFetch()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))
    }, [])


    return <ItemDetail productos = {productos} />
}

export default ItemDetailConteiner