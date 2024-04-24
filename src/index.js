import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []

console.log("Welcome to the your shopee cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

//adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart,item2);

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);
//Deletei Um ittem do Carrinho
//await cartService.deleteItem(myCart, item2.name);

await cartService.calculateTotal(myCart);