import React from "react";
class WindowResizeDetector extends React.Component {
  componentDidMount() {
    window.addEventListener(
    'resize',
    this.resizeHandler
    );
  }

  resizeHandler = () => {
    console.log('Размер страницы был изменен!');
  }

  componentWillUnmount() {
    window.removeEventListener(
    'resize',
    this.resizeHandler
    );
  }

    
  render() {
    return <div>Детектор включен</div>;
  }
}

export default WindowResizeDetector;