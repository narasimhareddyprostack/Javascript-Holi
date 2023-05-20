import { GM, GN } from './message.action'
let intialState = {
    msg: "Hello"
}

let messageReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GM':
            return { msg: "Good Morning! Rahul Gandhi" }
        case 'GN':
            return { msg: 'Good Night! Mr Rahul' }
        default:
            return state
    }
}
export { messageReducer }
/*
what is reducer?
reducer is a pure function, it take two arg 1. state 2.action
*/
