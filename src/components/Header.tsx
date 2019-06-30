import React, {useCallback} from 'react'
import AppBar from "@material-ui/core/AppBar";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useGeneralState} from "../stores/provider";
import {initUser, User} from "../models/User";
import {CHANGE_CURRENT_USER} from "../constatnts/actionTypes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default function Header() {
  const generalUsersState = useGeneralState("users");
  const generalCurrentUserState = useGeneralState("currentUser");
  const dispatch = useDispatch();

  const [usersState, setUsersState] = React.useState<User[]>([initUser]);
  const [currentUserState, setCurrentUserState] = React.useState<User>(initUser);

  React.useEffect(() => {
    setUsersState(
      generalUsersState.map(user => {
        return user;
      })
    )
  }, [generalUsersState]);

  React.useEffect(() =>{
    const currentUser = generalCurrentUserState;
    setCurrentUserState(currentUser);
  }, [generalCurrentUserState, generalUsersState]);

  const changeCurrentUserHandler = useCallback (
    ({user}: any) => {
      dispatch({
        type: CHANGE_CURRENT_USER,
        user: user,
      })
    }, [dispatch]
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" href="#">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <b>nyanpos</b>
          </Typography>
          <Grid container justify="flex-end" alignItems="center">
            <Grid>
              <Grid item xl={12}>receive: {currentUserState.receive_points ? currentUserState.receive_points : 0} points</Grid>
              <Grid item xl={12}>have: {currentUserState.points} points</Grid>
            </Grid>
            <Avatar alt={currentUserState.name} src={currentUserState.image_url} className={classes.avatar} />
          </Grid>
          <Button color="inherit" href="#">send</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
