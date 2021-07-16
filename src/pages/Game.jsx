import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import { lime } from "@material-ui/core/colors";


import "../styles/pages/game.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: lime['400']
  },
}));

function Game() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid 
      container
       spacing={3}
       alignItems='stretch'
      >
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Game;
