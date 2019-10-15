import React from "react";

export const initialState = {
  count: 0,
};

export const reducer = (state, { type }) => {
  switch (type) {
    case "RESET":
      return initialState;
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return initialState;
  }
}
