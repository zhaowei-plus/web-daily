import React, { useState, useRef, useEffect, useLayoutEffect, useReducer, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

// import App1 from './simpleRedux/App';
import Button from './Button';
import RedefineApp from './RedefineRedux';
import App from './App'

import Index from './Timeline';

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

function HookApp({ initialState }) {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState('名称');
  const [content,setContent] = useState('内容');

  const input = useRef(null);

  const computedCount = useMemo(() =>
    count + 10,
    [count]
  );

  // 异步
  useEffect(() => {
    console.log(input, 'useEffect');
    document.title = `You clicked ${ count } times`;

   return () => {
     console.log(input, 'end useEffect');
     document.title = 'remove';
   }
  }, [count]);

  // 同步
  useLayoutEffect(() => {
    console.log(input, 'useLayoutEffect');
    document.title = `You clicked ${ count } times`;

    return () => {
      console.log(input, 'end useLayoutEffect');
      document.title += '!!!';
    }
  });

  console.log(count, '更新Example')

  const handleCallBack = useCallback(() => {
    console.log(`new test is ${count}`);
    input.current.focus()
  }, count);


  /*
  * useCallback() 用于缓存方法
  * */
  const handleChange = useCallback(() => {
    setCount(`新内容 ${count}`);
  }, []);

  return (
    <>
      Count: {count} computedCount: {computedCount}
      <input ref={input} value={count} />
      <button onClick={handleCallBack}>focus</button>

      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => {
        console.log('prevCount:', prevCount);
        return prevCount + 1;
      })}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>

      <hr />

      Count: {count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>

      <hr />
      <button onClick={() => setName(new Date().getTime())}>name</button>
      <button onClick={() => setContent(new Date().getTime())}>content</button>
      <Button name={name} onChange={handleChange}>{content}</Button>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
