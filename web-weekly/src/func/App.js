import React, { useState, useEffect, useReducer } from 'react';
const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
  }
}

function App(props) {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  // 类似于 componentDidMount 和 componentDidUpdate
  /*
  * componentDidMount、componentDidUpdate、componentWillUnmount 这三个时期执行
  * 第二个参数：
  *   1、当数组中的成员值没有改变时，跳过执行
  *   2、[] 时，该 effect 只会在组件 mount 和 unmount 时执行
  * **/
  useEffect(() => {
    // 专门用于处理副作用的，在class 类组件中，componentDidMount、componentDidUpdate、componentWillUnmount 都是用来处理副作用的
    console.log('useEffect');
    document.title = `You clicked ${ count } times`;

    return () => {
      console.log('清理函数');
    }
  }, [count]);

  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => {
          console.log('prevCount:', prevCount);
          return prevCount + 1;
        })}>+</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>

      <hr />
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
}

export default App;

