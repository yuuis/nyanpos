import React from 'react'
import { useLocalStorageReducer } from 'react-storage-hooks'
import {Action, initialGlobalState} from "../reducers/common";
import {reducer} from "../reducers/reducer";
import {GlobalState} from "../models/GlobalState";

const { createContext, useContext } = React;
const stateContext = createContext(initialGlobalState);
const dispatchContext = createContext((() => true) as React.Dispatch<Action>);

export const useDispatch = () => {
  return useContext(dispatchContext);
};

export const useGlobalState = <K extends keyof GlobalState>(property: K) => {
  const state = useContext(stateContext);
  return state[property];
};

export const Provider: React.FC = props => {
  const [state, dispatch] = useLocalStorageReducer('data', reducer, initialGlobalState);
  return (
    <dispatchContext.Provider value={dispatch}>
      {' '}
      <stateContext.Provider value={state}>
        {' '}
        {props.children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
};
