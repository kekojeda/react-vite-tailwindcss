import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Cart(){

    const {cartProducts} = useContext(ShoppingCartContext)
    return(
        <div className="flex"><ShoppingCartIcon className="w-5 h-5"/>  {cartProducts.length}</div>
    )
}


export {Cart}