import React, { useReducer } from 'react';
import Provider from './Provider';
import { initialState as store, reducer  } from './store';

import Child from './Child';

function App1() {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Provider store={{ state, dispatch }}>
      <Child />
    </Provider>
  );
}

export default App1;
