import React from 'react'
import Employee from './Employee'
const User = () => {
    let user = {
        name: "Rahul Gandhi",
        loc: "Wayanad"
    }

    return (
        <div>
            <h2>User Component</h2>
            <hr />
            <Employee emp={user} msg={"Good Morning"} />
        </div>
    )
}

export default User