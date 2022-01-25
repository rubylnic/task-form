import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rubAmount:0,
            rate:57
        };
    }

    handleAmountChange = event => {
        this.setState({
        rubAmount: event.target.value
        });
    }

    calcUSDsum() {
        const { rubAmount, rate } = this.state;
        return (rubAmount / rate).toFixed(4);
    }
    
    loadActualRate = () => {
        fetch(process.env.REACT_APP_CURRENCY_URL)
        .then(response => response.json())
        .then(rates => {
        // const findUSD = rate => rate.code === 'USD';
        // const rate = rates.find(findUSD).value
        // this.setState({ rate });
        console.log(rates.rub.rate)
        });
    }
        
    
    render() {
        const { rubAmount, rate } = this.state;
        return (
        <div>
        <h3>Конвертер валют:</h3>
        <div>Текущий курс: {rate}</div>
        <div>
        <span>Сумма в рублях: </span>
        <input
        type="text"
        placeholder="Сумма в рублях"
        onChange={this.handleAmountChange}
        value={rubAmount}/>
        </div>
        <span>Сумма в долларах: {this.calcUSDsum()}</span>
        <button onClick={this.loadActualRate}>
            Загрузить курс валют
        </button>
        </div>
        );
    }
        
}
export default Calculator;