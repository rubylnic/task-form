import React from "react";
import { nanoid } from 'nanoid'
import Cards from "./Cards";
import Card from "./Card";
import ReactDOM from "react-dom";
class CRUDApp extends React.Component {
  state = {
    cardsArr: []
  }

  loadActualCards = () => {
    fetch(process.env.REACT_APP_CARDS_URL)
      .then(response => response.json())
      .then(cards => {
        this.setState({
          cardsArr: cards
        });
      });
  }

  postCards = async (data) => {
    await fetch(process.env.REACT_APP_CARDS_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await this.loadActualCards();
  }

  componentDidMount() {
    this.loadActualCards();
  }

  deleteHandle = async (id) => {

    await fetch(process.env.REACT_APP_CARDS_URL + '/' + id, {
      method: 'DELETE'
    });

    await this.loadActualCards();
  }

  handleChange = evt => {
    console.log(evt)
  }

  handleSubmit = evt => {
    evt.preventDefault();
    let input = evt.target.querySelector('textarea');
    const id = nanoid();
    const json = {
      "id": id,
      "content": input.value
    }

    this.postCards(json);
    input.value = '';
  }

  componentWillUnmount() {
    document.querySelector('form').removeEventListener(
      'submit',
      this.handleSubmit
    );
  }


  render() {
    return (
      <div className="crud__app">
        <button type="button" onClick={this.loadActualCards}>Обновить</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Note
            <textarea></textarea>
          </label>
          <input type="submit" value="submit" />
        </form>
        <Cards cards={this.state.cardsArr} deleteHandle={this.deleteHandle} loadActualCards={this.loadActualCards} />
      </div>
    )
  }
}
export default CRUDApp;