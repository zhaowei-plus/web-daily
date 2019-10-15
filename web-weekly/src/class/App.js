import React, {
  Component
} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  };

  render() {
      return (
        <div>
          <p>You clicked { count }</p>
          <button onClick={() => this.setState({
            count: count + 1,
          })}>
            Click me
          </button>
        </div>
      );
    );
  }
}
