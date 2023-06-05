export function totalPrice(cartProducts) {
    let totalPrice = 0
    cartProducts.map((product) => totalPrice += product.price)
    return totalPrice
}