let product = {
    p_Id: 101,
    p_Name: "Iphone 12",
    price: 34999
}
console.log(product)
console.log(product.p_Id)
console.log(product.p_Name)
console.log(product.price)
console.log(product.color)

console.log("Update and Delete")
product.color = ["black", "dark", "white"]
console.log(product)

delete product.price

console.log(product)