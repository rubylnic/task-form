import React from 'react';

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
}

class ClockItem extends React.Component {
  constructor(props) {
    super(props);
  }

  // getId() {
  //   console.log(props)
  // }

  state = {
    time: this.getCalculatedTime()
  }

  getCalculatedTime() {
    return new Date().addHours(+this.props.clock.time);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().addHours(+this.timeDiff)
    });
  }

  render() {
    return (
      <div>
        <div className="clock__item" id={this.props.id}>
          {this.state.time.toLocaleTimeString()}
          <button onClick={this.props.handleDelete}>&#10008;</button>
        </div>
      </div>
    );
  }
}
export default ClockItem;