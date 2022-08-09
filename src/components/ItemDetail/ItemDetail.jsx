const ItemDetail = (productos) => {
    return (
        <div className="row">
            <div className="col.md-6">
                <h2>nombre: {productos.nombre}</h2>
                <h3>descripción: {productos.descripcion}</h3>
                <h4>stock: {productos.stock}</h4>
                <button>Comprar</button>
            </div> 
        </div>
    )

}
export default ItemDetail