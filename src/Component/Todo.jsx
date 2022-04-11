import React from 'react'
import { deleteActionCreator } from '../redux/todoReducers'
import s from './todo.module.css'
function Todo(props) {
    let Delete = () =>{
        props.dispatch(deleteActionCreator(props.id))
    }
    return (
        <div className={s.wraper}> 
            <span>{props.number}</span> <span>{props.text}</span> <button onClick={Delete}>X</button>
        </div>
    )
}

export default Todo
