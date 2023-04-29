import React, { useState } from 'react'

const Message = () => {
    let [msg, setMsg] = useState("Hello");
    let gmHandler = () => {
        setMsg("Good Morning")
    }
    return (
        <div>
            <h2>Message Component</h2>
            <h3>{msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={() => {
                setMsg("Good Night")
            }}>GN</button>
        </div>
    )
}

export default Message