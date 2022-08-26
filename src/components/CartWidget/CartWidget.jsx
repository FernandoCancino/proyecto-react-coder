import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const CartWidget = () => {

  const { cart, clear, removeItem, totalProducts } = useContext(CartContext)

  console.log("cartporducto desde widget:, cart ")
   {cart.map((productos) =>  {
     return (
       <>
       {cart.length !== 0 && <p>{ totalProducts } </p>}
         <div className="item-cart-product" key={productos.id}>
           <h2>nombre: {productos.nombre}</h2>
           <h3>descripción: {productos.descripcion}</h3>
           <h4>stock: {productos.stock}</h4>
           <button onClick={() => removeItem()}>Eliminar articulo</button>
         </div>
         <div>
           <button onClick={() => clear()}>Borrar todo</button>
         </div>
       </>
     )
   })
 }
  
}



export default CartWidget
