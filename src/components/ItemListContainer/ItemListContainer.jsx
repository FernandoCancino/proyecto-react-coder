import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {categoriaId} = useParams ()
    console.log (categoriaId)

    useEffect(() => {
        if (categoriaId) {
            getFetch() // llamada a la api
            .then((resp) => {
                setProductos(resp.filter (productos => productos.categoriaId = categoriaId))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }        
        else{
            getFetch() // llamada a la api
        .then((resp) => {
            setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))}
        
    }, [categoriaId])
    console.log(productos)

    
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