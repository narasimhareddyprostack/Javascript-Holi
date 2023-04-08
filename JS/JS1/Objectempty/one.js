let emp = { id: 101, name: "Rahul" }
let user = {}
let keys = Object.keys(emp)

console.log(keys)
console.log(keys.length > 0)

if (Object.keys(user).length > 0) {
    console.log("Not Empty Object")
}
else {
    console.log("Empty Object")
}