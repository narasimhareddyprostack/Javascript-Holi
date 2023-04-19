import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    name = "Rahul Gandhi"
    age = 52;
    loc = ["Wayanad", "Amedhi"]
    details = {
        email: "rahul@pm.com",
        sal: 45000
    }
    render() {
        return <div>
            <h2>User Component</h2>
            <hr />
            {/* <Employee edetails={this.details} ename={this.name} eage={this.age} eloc={this.loc} />
             */}
            <Employee ename={this.name} eage={this.age} />
        </div>
    }
}
export default User