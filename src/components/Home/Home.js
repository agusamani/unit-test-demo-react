import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Todos from '../Todos/Todos';
import './Home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '25px',
    height: '100vh'
  },
  paper: {
    height: '75vh',
    width: '25vw',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export function Home() {
  const classes = useStyles();
  
  return (
    <div className='container'>
        <Grid container justify="center">
              <Paper className={classes.paper} >
                <Todos status='Todo' />
              </Paper>
              <Paper className={classes.paper} >
                <Todos status='InProgress' />
              </Paper>
              <Paper className={classes.paper} >
                <Todos status='Done' />
              </Paper>
        </Grid>
    </div>
  )
}

export default Home;