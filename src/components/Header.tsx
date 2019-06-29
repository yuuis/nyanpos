import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" href="#">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            nyanpos
          </Typography>
          <Button color="inherit" href="#">send</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
