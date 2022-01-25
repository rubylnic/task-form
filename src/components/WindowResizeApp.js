import React from "react";
import WindowResizeDetector from "./WindowResizeDetector";

class WindowResizeApp extends React.Component {
  state = {
    detectorIsEnabled:false
  };
 

  toggleDetectorState = () =>{
    this.setState(({detectorIsEnabled}) => ({
      detectorIsEnabled: !detectorIsEnabled
      }));
    // !this.state.detectorIsEnabled ? this.setState({detectorIsEnabled:true}): this.setState({detectorIsEnabled:false})
  }

  render() {
    return (
    <div>
      <button
      onClick={this.toggleDetectorState}>
      {this.state.detectorIsEnabled ?
      "Выключить детектор" : "Включить детектор"}
      </button>
      {this.state.detectorIsEnabled ?
      <WindowResizeDetector /> : null}
    </div>);
    }
}

export default WindowResizeApp;