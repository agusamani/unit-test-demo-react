import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Todo.css';

export default function Todo({ title }) {
  return (
    <div className='todoContainer'>
      <Paper>
        {title}
      </Paper>
    </div>
  )
}