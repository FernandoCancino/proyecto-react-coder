import { useState, createContext } from "react"

const CartContext = createContext ()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [totalProducts, setTotalProducts] = useState (0)

    const addToCart = (productos) => {
        let isInCart = cart.find (( productInCart) => productInCart.id === productos.id
    )
    if (isInCart) {
        const newArray = cart.map (productInCart => {
            if (productInCart.id === productos.id) {
                return { ...productInCart, count: productInCart.count + productos.count}                
            } else {
                return productInCart                
            }
        })
        setCart (newArray)
        setTotalProducts (totalProducts + productos.cantidad)
    } else {
        setCart ([...cart,productos ])
        setTotalProducts (totalProducts + productos.cantidad)        
    } 
}

    const clear = () => {setCart ([])}

    const removeItem = (id) => {
     const newCart = cart.filter ((productos) => productos.id !== id)
     setCart (newCart)
    } 


    return (
        <CartContext.Provider value={{ cart, addToCart , clear, removeItem, totalProducts }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartProvider

export { CartContext }