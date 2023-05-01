import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Users = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log("Test Case 123")
                setUsers(resp.data)
            })
            .catch(() => { })
    }, [])
    return (
        <div>
            <h1>User data</h1>
            <pre>{JSON.stringify(users)}</pre>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Users