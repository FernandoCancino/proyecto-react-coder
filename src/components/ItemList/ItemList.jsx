import Item from "../Item/item"

const ItemList = ({ productos }) => {
        return (
            productos.map(producto => <Item key={producto.id} productos={productos} />)
        )
    }

export default ItemList
