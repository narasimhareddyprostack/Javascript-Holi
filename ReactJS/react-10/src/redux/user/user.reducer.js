import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let inititalState = {
    users: []
}
let userReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'USER_REQ':
            return { users: [] }
        case 'USER_SUCCESS':
            return { users: action.payload }
        case 'USER_FAILURE':
            return { users: [] }
    }
}
export { userReducer }