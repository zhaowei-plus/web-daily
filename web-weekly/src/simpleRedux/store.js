import Reac, { createContext } from 'react';

const storeContext = createContext();

const initialState = {
  user: '武侯',
  age: 23,
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'changeName':
      return { user: '里斯', age: 25 };
    default:
      return initialState;
  }
}

export {
  storeContext, initialState, reducer,
};
