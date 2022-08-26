import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)



  return (
    <>
      <div>cart</div>
      {console.log("carrito desde chajout:", cart)}
    </>
  )
}

export default Cart