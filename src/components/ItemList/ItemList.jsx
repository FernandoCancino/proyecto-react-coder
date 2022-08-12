import Item from "../Item/item"

const ItemList = ({ productos }) => {
        return (
            productos.map(producto => <Item key={producto.id} productos={producto} />)
        )
    }

export default ItemList
