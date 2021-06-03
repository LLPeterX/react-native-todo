import React, {useReducer} from 'react';
import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';
import { SET_SCREEN } from '../actions'

export const ScreenState = ({children}) => {
  const [state, dispatch] = useReducer(screenReducer, null);
  const changeScreen = (todoId) => dispatch({type: SET_SCREEN, todoId});
  return <ScreenContext.Provider value={{todoId:state, changeScreen}}>
    {children}
  </ScreenContext.Provider>
}