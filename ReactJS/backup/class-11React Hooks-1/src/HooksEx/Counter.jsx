import React from 'react'

const Counter = () => {
    let [counter, setCounter] = React.useState(1)
    return (
        <div>
            <h2>Counter Ex</h2>
            <h3>Counter value:{counter}</h3>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+</button>
            <button onClick={() => {
                setCounter(counter - 1)
            }}>-</button>
        </div>
    )
}

export default Counter