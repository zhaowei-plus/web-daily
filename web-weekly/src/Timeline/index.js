import React, { Component } from 'react';

let isInitInnerHeight = false;
class Timeline extends Component {
  constructor() {
    super();

    this.state = {
      wh: 100,
    };
  }

  addResizeListener = () => {
    window.removeEventListener('resize', this.resizeFunc, false);
  }

  removeResizeListener = () => {
    window.removeEventListener('resize', this.resizeFunc, false);
  }

  resizeFunc = () => {
    let h = this.props.headerHeight || 140;
    let wh = window.innerHeight - h;
    let eleH = document.querySelector('.zcy-timeline-modal-bd');
    if (eleH) {
      if (!isInitInnerHeight && eleH.scrollHeight > wh) {
        wh = eleH.scrollHeight;
        isInitInnerHeight = true;
      }
    }
    this.setState({
      wh: wh
    });
  }

  componentDidMount() {
    console.log('设置state');
    this.state = {
      wh: window.innerHeight - 140,
    };
    // this.setState({
    //   wh: window.innerHeight - 140,
    // });

    this.addResizeListener();
    this.resizeFunc();
  }

  componentWillUnmount() {
    this.removeResizeListener();
  }

  render() {
    const { wh } = this.state;
    return (
      <div>{wh}</div>
    );
  }
}

export default Timeline;
