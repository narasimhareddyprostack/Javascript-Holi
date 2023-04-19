import React from 'react'

class Employee extends React.Component {

    render() {
        return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee Name:{this.props.ename}</h3>
            <h3>Emoloyee Age:{this.props.eage}</h3>
            <h3>Current Segement:{this.props.eloc[1]}</h3>
            <h4>Salary:{this.props.edetails.sal}</h4>
        </div>
    }
}
export default Employee