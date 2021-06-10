const initialState = [];

const todos = (state = initialState, action) => {
  switch(action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "removeTodo":
      return state.filter(todo => todo.id !== action.payload);
    case "toInProgress":
      return state.map(todo => {
        if(todo.id === action.payload) {
          todo.status = "InProgress";
        }
        return todo;
      });
    case "toDone":
      return state.map(todo => {
        if(todo.id === action.payload) {
          todo.status = "Done";
        }
        return todo;
      });
    default:
      return state
  }
}

export default todos;
