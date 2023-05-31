import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

function Cart(){

    const {cartCount} = useContext(ShoppingCartContext)
    return(
        <div>Carrito {cartCount}</div>
    )
}


export {Cart}