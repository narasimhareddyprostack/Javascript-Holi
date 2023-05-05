import React, { useEffect } from 'react'
import Axios from 'axios'
const Cust_Moves = () => {
    let [cust_Moves, setCust_Moves] = React.useState({})
    useEffect(() => {
        Axios.get('http://test.api.boxigo.in/sample-data/')
            .then((response) => {
                setCust_Moves(response.data)
            })
            .catch(() => { })
    }, [])
    return (
        <div>
            <h2>Customer Movies</h2>
            <pre>{JSON.stringify(cust_Moves)}</pre>
        </div>
    )
}

export default Cust_Moves