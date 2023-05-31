import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Cart(){

    const {cartCount} = useContext(ShoppingCartContext)
    return(
        <div className="flex"><ShoppingCartIcon className="w-5 h-5"/>  {cartCount}</div>
    )
}


export {Cart}