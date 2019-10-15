import React, { Component, createContext, useContext, useReducer } from 'react';
import ReactDom from 'react-dom';

const initialState = {
  count: 10,
};

const Context = createContext();

const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'INCREASE': {
      return {
        ...state,
        count: state.count + payload.count,
      };
    }
    case 'DECREASE': {
      return {
        ...state,
        count: state.count - payload.count,
      };
    }
    default:
      return new Error();
  }
};

const connect = ( WrappedComponent ) => {
  const { dispatch, state } = Context;

  return (props) => <WrappedComponent dispatch={dispatch} {...props} />;
};

// @connect
class ComponentA1 extends Component {
  constructor(props) {
    super(props);

    console.log('ComponentA1 props:', props);
  }

  handleIncrease = () => {
    this.props.dispatch({
      type: 'INCREASE',
      payload: {
        count: 10,
      },
    });
  };

  handleDecrease = () => {
    this.props.dispatch({
      type: 'DECREASE',
      payload: {
        count: 8,
      },
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );

  }
}

const ComponentA = () => {
  const { dispatch, state } = useContext(Context);
  const { count } = state;

  const handleIncrease = () => {
    dispatch({
      type: 'INCREASE',
      payload: {
        count: 10,
      },
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: 'DECREASE',
      payload: {
        count: 8,
      },
    });
  };

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

const ComponentB = () => {
  const { dtspatch, state } = useContext(Context);
  const { count } = state;

  return (
    <p>Count: { count }</p>
  );
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <ComponentA />
        <ComponentA1 />
        <ComponentB />
      </Context.Provider>
    </div>
  );
};

export default App;
