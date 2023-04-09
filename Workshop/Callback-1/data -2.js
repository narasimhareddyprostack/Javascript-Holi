let employees = [{ id: 101, name: 'Rahul', sal: 45000 },
{ id: 102, name: 'sonia', sal: 55000 }
]
let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, 4000)
}
let getEmployees = () => {
    setTimeout(() => {

        document.getElementById('abc').innerHTML = "GM"
    }, 2000)
}
createEmployee({ id: 103, name: 'Priyanka', sal: 65000 })
getEmployees()