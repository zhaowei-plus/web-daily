import React, {useReducer} from 'react';

import Context from './Context';
import { reducer, initialState } from './Reducer';

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
