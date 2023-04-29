import React from 'react'

const Login = () => {

    let btnRef = React.useRef(null)
    let updateHandler = (event) => {
        btnRef.current.disabled = !event.target.checked
    }
    return (
        <div>
            <h1>Login Component</h1>

            <form action="">
                <input type="checkbox" onChange={updateHandler} /> Please Accept Terms & Conditions
                <br /><br />
                <input ref={btnRef} type="submit" value="Login" disabled />
            </form>
        </div>
    )
}

export default Login