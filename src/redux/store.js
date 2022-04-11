import {combineReducers, createStore} from "redux"
import todoReducers from "./todoReducers";
let redusers= combineReducers({
todoPage:todoReducers
})
let store = createStore(redusers);

export default store