import React from "react";
import ClockItems from "./ClockItems";
import { nanoid } from 'nanoid'
class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clockItems: [],
      name: '',
      time: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const name = this.state.name;
    const time = this.state.time;

    const clockItem = {
      name: name,
      time: time,
      id: nanoid()
    }

    let clockItemsArr = [...this.state.clockItems];

    clockItemsArr.push(clockItem)

    this.setState({
      clockItems: clockItemsArr,
      name: '',
      time: ''
    });

    // evt.target.reset();
  }

  handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleDelete = (id) => {
    const itemId = id;
    const items = this.state.clockItems.filter(item => item.id !== itemId);
    this.setState({ clockItems: items });
  }

  render() {
    return (
      <div className="clock">
        <form className="clock__form" onSubmit={this.handleSubmit}>
          <label>
            Название
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} required />
          </label>
          <label>
            Временная зона
            <input type="number" id="time" name="time" value={this.state.time} onChange={this.handleInputChange} required />
          </label>
          <input type="submit" value="add" />
        </form>

        <div className="clock__items">
          <ClockItems clockItems={this.state.clockItems} handleDelete={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default Clock;