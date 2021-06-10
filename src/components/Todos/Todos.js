import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import './Todos.css'

export function Todos({ status, todos }) {
  // Todo
  const filteredTodos = todos.filter(todo => todo.status === status);
  return (
    <div>
      <span>
        {status}
      </span>
      {
        filteredTodos.map(todo => {
          return(
            <div key={todo.id}>
              <Link className="linkTodos" to={`/edit/${todo.id}`}>
                <Todo {...todo} title={todo.title}/>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      todos: state
  };
};

export default connect(mapStateToProps)(Todos);