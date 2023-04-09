let employees = [{ id: 101, name: 'Rahul', sal: 45000 },
{ id: 102, name: 'sonia', sal: 55000 }
]

let createEmployee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("Data Inserted Successfully") : reject("Failed")
            employees.push(emp)
        }, 4000)
    });
}

createEmployee({ id: 103, name: 'Priyanka', sal: 45000 })
    .then()
    .catch()