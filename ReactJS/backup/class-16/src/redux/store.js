//create store 
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { messageReducer } from './message/message.reducer'
import { counterReducer } from './counter/counter.reducer'
let store = createStore(counterReducer, composeWithDevTools())


export { store }