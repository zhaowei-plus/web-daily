import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactReduxContext } from './Context';

class Provider extends Component {
  constructor(props) {
    super(props);

    const { store } = props;

    this.state = {
      store,
    };
  }

  render() {
    const Context = ReactReduxContext;

    return (
      <Context value={this.state}>
        {this.props.children}
      </Context>
    );
  }
}

Provider.propsTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
  context: PropTypes.object,
  children: PropTypes.any,
};

export default Provider;
