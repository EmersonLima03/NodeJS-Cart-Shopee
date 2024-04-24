//CASOS DE USO
//adicionar item  no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//deletar item do carrinho
async function deleteItem(userCart, name){

    const index = userCart.findIndex((item) => item.name === name)
    if(index !== -1){
        userCart.splice(index, 1)
    } 
}

//remover um item do carrinho
async function removeItem(userCart, item){
    //1. enonctrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //2. caso não encontre o item
    if (indexFound == -1) {
        console.log('Item não encontrado')
        return;
}

    //3. item > 1 subtrair um item, item = 1 deletar o item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. item = 1 deletar o item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
        return;
    }
}

//calcular o total  do carrinho
async function calculateTotal(userCart){
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(`\n Total: ${result}`);
}

async function displayCart(userCart) {
    console.log(`\n Shopee cart List:`)
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$  ${item.price}x | ${item.quantity} | Subtotal ${item.subtotal()} `);
    });
}

export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};