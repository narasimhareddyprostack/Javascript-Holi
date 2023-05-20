import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action'
const Message = () => {

    let dispatch = useDispatch()
    let message = useSelector((state) => {
        return state.message
    })
    let gmHandler = () => {
        //step1: dispatch action
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }

    return (
        <div>
            <h2>Message Component</h2>
            <pre>{JSON.stringify(message)}</pre>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}

export default Message