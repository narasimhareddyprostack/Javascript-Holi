import React, { Component } from 'react'

class UserList extends Component {
    render() {
        return (
            <div>
                <h2>UserList</h2>
                <pre>{JSON.stringify(this.props.users)}</pre>
                <div>

                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.props.users.map((user) => {
                                    return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserList