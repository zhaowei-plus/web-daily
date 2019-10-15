/**
 * 实现高阶组件的方法有两种：
 *  1、属性代理：告诫组件通过被包裹的React组件来操作Props
 *  2、反向继承：告诫组件继承于被包裹的React组件
 *
 * */

import React, { Component } from 'react';

// 属性代理
const WrapperContainer = (WrappedComponent) => (
  class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
);

// 反向继承
const MyContainer = (WrappedComponent) => {
  class extends WrappedComponent {
    render() {
      return super.render();
    }
  }
};


// https://www.jianshu.com/p/5dea58b49d0e
