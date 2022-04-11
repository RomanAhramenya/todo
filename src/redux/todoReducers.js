const ADD_POST = "ADD_POST";
const TEAXAREA_VALUE = "TEAXAREA_VALUE";
const DELETE='DELETE'
let initialState = {
  todo: {
    TodoData: [
      {
        id: 1234,
        text: "hello Roman",
      },
    ],
    valueTexarea: "",
    disabled:false
  },
};
let todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if(state.todo.valueTexarea !== ''){
         let post = {
        id: Math.floor(Math.random() * 10000),
        text: state.todo.valueTexarea,
      };
      state.todo.valueTexarea = "";
      state.todo.TodoData.push(post);
      return state;
      } else{
        state.todo.disabled=true
        return state;
      };
    case TEAXAREA_VALUE:
      state.todo.disabled=false
      state.todo.valueTexarea = action.text;
      return state;
      case DELETE:
       state.todo.TodoData=state.todo.TodoData.filter(item=>item.id !== action.id)
        return state 
    default:
      return state;
  }
};
export default todoReducers;
export let todoActionCreator = () => ({ type: ADD_POST });
export let valueTextareaActionCreator = (text) => {
  return {
    type: TEAXAREA_VALUE,
    text: text,
  };
};
export let deleteActionCreator = (id) => {
    return {
      type: DELETE,
      id: id
    };
}