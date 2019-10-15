import ACTION from './Action';

const reducer = (state, { type, payload }) => {
  switch(type) {
    case ACTION.INCREASE: {
      return {
        ...state,
        count: state.count + payload.count,
      };
    }
    case ACTION.DECREASE: {
      return {
        ...state,
        count: state.count - payload.count,
      };
    }
    default:
      return new Error();
  }
};

export {
  reducer,
};
