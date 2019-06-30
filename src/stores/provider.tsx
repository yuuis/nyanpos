import React from 'react'
import { useLocalStorageReducer } from 'react-storage-hooks'
import {Action, initialGeneralState} from "../reducers/common";
import {reducer} from "../reducers/reducer";
import {GeneralState} from "../models/GeneralState";

const { createContext, useContext } = React;
const stateContext = createContext(initialGeneralState);
const dispatchContext = createContext((() => true) as React.Dispatch<Action>);

export const useDispatch = () => {
  return useContext(dispatchContext);
};

export const useGeneralState = <K extends keyof GeneralState>(property: K) => {
  const state = useContext(stateContext);
  return state[property];
};

export const Provider: React.FC = props => {
  const [state, dispatch] = useLocalStorageReducer('data', reducer, initialGeneralState);
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
