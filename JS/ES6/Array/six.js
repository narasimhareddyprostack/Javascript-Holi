let enames = ["Nayana", "Sachin", "Ganguly", "viral", "MRaj"]
//create new array based on existing array
//let new_Names = enames.map()
//let new_Names = enames.map(()=>{})
let new_Names = enames.map((ename) => {
    return ename.toUpperCase().charAt(0)
})

console.log(enames)
console.log(new_Names)