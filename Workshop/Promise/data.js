let employees = [{ id: 101, name: 'Rahul', sal: 45000 },
{ id: 102, name: 'sonia', sal: 55000 }
]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            flag ? resolve("Data Inserted Successfully") : reject("Failed")
            employees.push(emp)
        }, 4000)
    });
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

createEmployee({ id: 103, name: 'Priyanka', sal: 45000 })
    .then((msg) => {
        console.log(msg)
        getEmployees()
    })
    .catch((err) => {
        console.log(err)
    })
