import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Nav.css';

export default function Nav() {
  return (
  <AppBar className='nav' position="static">
    <Toolbar className='toolbarNav'>
      <Typography variant="h6">
        <Link to='/'>
          TODOS
        </Link>
      </Typography>
      <Link to="/add">Add Todo</Link>
    </Toolbar>
  </AppBar>
  )
}