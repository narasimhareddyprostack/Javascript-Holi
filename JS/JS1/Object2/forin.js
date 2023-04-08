let product = {
    p_Id: 101,
    p_Name: 'Iphone 12',
    price: 34999,
    color: ['black', 'dark', 'white']
}
for (prop in product) {
    console.log(product[prop])
}