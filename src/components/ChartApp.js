import CircleChart from "./CircleChart";
import React from "react";
class ChartApp extends React.Component {
  state = {
    jsRate: 40,
    javaRate: 90,
    sharpRate: 30
  };

  handleChange = event => {
    this.setState({
    [event.target.name]: event.target.value
    });
  }

  
  render() {
    return (
      <div>
        <h2>Популярность языков программирования</h2>
        <div>JavaScript:
        <input type="text" name="jsRate" value={this.state.jsRate}
        onChange={this.handleChange} />
        </div>
        <CircleChart rates={[
        this.state.jsRate,
        this.state.javaRate,
        this.state.sharpRate ]} />
      </div>
    );
  }
}

export default ChartApp;