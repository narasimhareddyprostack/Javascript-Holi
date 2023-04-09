let employees = [{ id: 101, name: 'Rahul', sal: 45000 },
{ id: 102, name: 'sonia', sal: 55000 }
]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            flag ? resolve('Success ! ') : reject('failure')
            employees.push(emp)
        }, 4000)
    })
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (employee of employees) {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                         <tr>`
        }
        document.getElementById('abc').innerHTML = rows
        //document.getElementById('abc').innerHTML = "GM"
    }, 2000)
}

let exec = async () => {
    await createEmployee({ id: 103, name: 'priyanka', sal: 45000 })
    getEmployees()
}
exec()