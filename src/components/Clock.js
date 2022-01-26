import React from "react";
import ClockItems from "./ClockItems";
import { nanoid } from 'nanoid'
class Clock extends React.Component {

  state = {
    clockItems: []
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const name = evt.target.querySelector('#name');
    const time = evt.target.querySelector('#time');
    const clockItem = {
      name: name.value,
      time: time.value,
      id: nanoid()
    }

    let clockItemsArr = [...this.state.clockItems];
    clockItemsArr.push(clockItem)

    this.setState({
      clockItems: clockItemsArr
    });

    name.value = '';
    time.value = '';
  }

  handleDelete = (evt) => {
    const itemId = evt.target.parentElement.id;
    const items = this.state.clockItems.filter(item => item.id !== itemId);
    this.setState({ clockItems: items });
  }

  render() {
    return (
      <div className="clock">
        <form className="clock__form" onSubmit={this.handleSubmit}>
          <label>
            Название
            <input type="text" id="name" name="name" required />
          </label>
          <label>
            Временная зона
            <input type="number" id="time" name="hours" required />
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