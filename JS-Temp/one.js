
let company_Email = Symbol()

let emp = {
        id: 101,
        name: "Rahul",
        email: 'rahul@gmail.com',
        [company_Email]: 'ibm.com'
}
//console.log(emp)
for (prop in emp) {
        console.log(prop)
} 