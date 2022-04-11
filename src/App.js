import React from "react";
import "./App.css";
import Header from "./Component/header/Header";
import Todo from "./Component/Todo";
import {
  todoActionCreator,
  valueTextareaActionCreator,
} from "./redux/todoReducers";

function App(props) {
  let todo = props.state.todoPage.todo.TodoData.map((e, item) => {
    return (
      <Todo
        number={item + 1}
        id={e.id}
        text={e.text}
        dispatch={props.dispatch}
      />
    );
  });
  let refPost = React.createRef();
  let addPost = () => {
    props.dispatch(todoActionCreator(refPost.current.value));
  };
  let onChange = () => {
    props.dispatch(valueTextareaActionCreator(refPost.current.value));
  };
  return (
    <div className="App">
      <Header />
      {todo}
      <div >
        <div className="field">
          <textarea
            onChange={onChange}
            value={props.state.todoPage.todo.valueTexarea}
            ref={refPost}
          />
          <button
            className="add_post"
            disabled={props.state.todoPage.todo.disabled}
            onClick={addPost}
          >
            add Post
          </button>
        </div>

        {props.state.todoPage.todo.disabled && (
          <div className="warning">введите текст</div>
        )}
      </div>
    </div>
  );
}

export default App;
