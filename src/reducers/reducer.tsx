import {GeneralState} from '../stores/generalState'
import {CHANGE_CURRENT_USER, CREATE_CLAP, CREATE_POST, INIT} from "../constatnts/actionTypes";
import {Action, initialGeneralState} from "./common";

export const reducer = (state: GeneralState, action: Action) => {
  switch (action.type) {
    case INIT:
      return initialGeneralState;
    case CHANGE_CURRENT_USER:
      return action.user
        ? {
          ...state,
          currentUser: action.user
        }
        : state;
    case CREATE_POST:
      if (action.post !== undefined) {
        state.users.splice(state.users.indexOf(action.post.send_user), 1);
        state.users.splice(state.users.indexOf(action.post.receive_user), 1);
      } else {
        return state;
      }

      return action.post
        ? {
          ...state,
          posts: [...state.posts, action.post],
          users: [
            ...state.users,
            {
              ...action.post.send_user,
              points: action.post.send_user.points - action.post.points
            },
            {
              ...action.post.receive_user,
              points: action.post.receive_user.receive_points + action.post.points
            }
          ]
        }
        : state;
    case CREATE_CLAP:
      if (action.crap !== undefined) {
        state.users.splice(state.users.indexOf(action.crap.post.send_user), 1);
        state.users.splice(state.users.indexOf(action.crap.post.receive_user), 1);
        state.users.splice(state.users.indexOf(action.crap.user), 1);
      } else {
        return state;
      }

      return action.crap
        ? {
          ...state,
          craps: [...state.craps, action.crap],
          users: [
            ...state.users,
            {
              ...action.crap.post.send_user,
              points: action.crap.post.send_user.receive_points++
            },
            {
              ...action.crap.post.receive_user,
              points: action.crap.post.receive_user.receive_points++
            },
            {
              ...action.crap.user,
              points: action.crap.user.points - 2
            }
          ]
        }
        : state;
    default:
      return state;
  }
};
