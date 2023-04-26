import React from 'react'
class Employee extends React.Component {
    employees = [{ id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 },
    { id: 103, name: "Priyanka", sal: 65000 }]
    render() {
        return <React.Fragment>

            <table border={10}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        this.employees.map(function (emp) {
                            return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.sal}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </React.Fragment>
    }
}

export default Employee