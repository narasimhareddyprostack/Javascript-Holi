import { combineReducers } from "redux";
import { counterReducer } from './counter/counter.reducer'
import { messageReducer } from './message/message.reducer'
let rootReducer = combineReducers({ counter: counterReducer, message: messageReducer });

export { rootReducer }