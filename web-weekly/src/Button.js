import React, { useMemo, useEffect } from 'react';

function Button({ name, onChange, children }) {
  function changeName(name) {
    console.log('changeName 11');
    return name + '改变name的方法';
  }

  /*
  * useCallback() 用于把匿名函数封封存起来，避免每次渲染的时候都声明一个新的匿名函数
  * */

  /*
  * useMemo() 用于保存计算值
  * */
  // otherName 依赖 name，只有当 name 发生变化时，才调用回调函数
  const otherName = useMemo(() => changeName(name), [name]);

  useEffect(() => {
    console.log('onChange 发生改变');
  }, [onChange]);

  return (
    <>
      <div>{otherName}</div>
      <div>{children}</div>
    </>
  );
}

export default Button;
