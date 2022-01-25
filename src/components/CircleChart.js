import Chart from 'chart.js/auto';
import React from 'react';

class CircleChart extends React.Component {
  constructor(...params) {
    super(...params);
    this.data = {
      datasets: [{
      data: [60, 70, 30],
      backgroundColor: ['yellow', 'red', 'green']
      }],
      labels: ['JavaScript', 'Java', 'C#' ]
    };
  }
  componentDidMount() {
    this.chart = new Chart("myChart", {
      type: 'doughnut',
      data: this.data
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.rates !== prevProps.rates) {
      this.updateChart(this.props.rates);
    }
  }

  updateChart(rates) {
    this.chart.data.datasets[0].data = rates;
    this.chart.update();
  }

  render() {
    return <canvas id="myChart" width="100" height="100"/>;
  }
}
  
export default CircleChart;