const Item = (producto) => {
    return (<div>
        <h1>nombre: ${producto.nombre}</h1>
        <h2>stock: ${producto.stock}</h2>
        <h3>descripción: ${producto.descripcion}</h3>
    </div>
    )
} 
 export default Item 