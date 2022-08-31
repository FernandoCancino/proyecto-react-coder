import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore"
import db from "../../fireBaseConfig"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)



    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }


    useEffect(() => {
        getProducts()
            .then((res) => {
                setProductos(res)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
      }, [])



return (
    <div>
        {loading ?
            <h1>Cargando...</h1>
            :
            <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}>
                <ItemList productos={productos} />
            </div>
        }
    </div>
)
}

export default ItemListContainer