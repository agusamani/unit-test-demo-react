let todoId = 1

export const addTodo = function(todo) {
  var obj = {
    type: "addTodo",
    payload: {
      ...todo,
      status: 'Todo',
      id: todoId
    }
  };
  todoId++;
  return obj;
};

export const removeTodo = function(id) {
  return {
    type: "removeTodo",
    payload: id
  };
}

export const toInProgress = function(id) {
  return {
    type: "toInProgress",
    payload: id
  };
};

export const toDone = function(id) {
  return {
    type: "toDone",
    payload: id
  };
};
