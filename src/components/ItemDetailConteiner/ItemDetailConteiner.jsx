import { getFetch } from "../../helpers/getFetch"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
//Firebase
import db from "../../fireBaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailConteiner = () => {
    const [productos, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProduct()
            .then((res) => {
                setProducto(res)
            })
    }, [id])


    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = id
        return product
    }


    return <ItemDetail productos={productos} />
}

export default ItemDetailConteiner

