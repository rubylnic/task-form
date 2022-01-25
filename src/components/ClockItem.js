import React from 'react';

Date.prototype.addHours= function(h){
  this.setHours(this.getHours()+h);
  return this;
}

class ClockItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.timeDiff = props.clock.time;
    this.name = props.clock.name;
    this.calculatedTime = new Date().addHours(+this.timeDiff);

    this.state = {
      date: this.calculatedTime
    }
  }


  state = {
    time: this.calculatedTime
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
           {this.state.date.toLocaleTimeString()}
           <button onClick={this.props.handleDelete}>&#10008;</button>
        </div>
      </div>
    );
  }
}
export default ClockItem;