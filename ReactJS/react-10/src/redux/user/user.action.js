import Axios from 'axios'

const USER_REQ = 'USER_REQ'
const USER_SUCCESS = 'USER_SUCCESS'
const USER_FAILURE = 'USER_FAILURE'

let user_Req = () => {
    return { type: USER_REQ }
}
let user_Success = (user) => {
    return { payload: user, type: USER_SUCCESS }
}
let user_Failure = () => {
    return { type: USER_FAILURE }
}

let User_Action = () => {
    return async (dispatch) => {
        dispatch(user_Req())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data)
                dispatch(user_Success(response.data))
            })
            .catch((err) => {
                dispatch(user_Failure())
            })

    }
}

export { User_Action }