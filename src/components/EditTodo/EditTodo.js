import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import './EditTodo.css';

import { toInProgress, toDone } from '../../actions';

export function EditTodo({ match, todos, toInProgress, toDone}) {
  const todo = todos.filter( todo => todo.id === parseInt(match.params.id))[0]

  if(!todo) return <h1>No hay todo.</h1>
  return (
    <div>
      <div className='todoBox'>
        Todo: {todo.title}
      </div>
      <div className='todoBox'> 
        Description: {todo.description}
      </div>
      <div className='todoBox'>
        Place: {todo.place}
      </div>
      <div className='todoBox'>
        Date: {todo.date}
      </div>
      <div className="btns">
        <Button color="primary" onClick={() => toDone(todo.id)}>Done</Button>
        <Button onClick={() => toInProgress(todo.id)}>In Progress</Button>
        <Button>Delete</Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

const mapDispatchToProps = {
   toInProgress,
   toDone
}

export default connect(mapStateToProps,mapDispatchToProps)(EditTodo);