import React from "react";


class Card extends React.Component {

  onDeleteClick = (id) => {
    this.props.deleteHandle(id);
    this.props.loadActualCards();
  }

  render() {
    const card = this.props.card;
    return (
      <div className="card" id={card.id}>
        {card.content ? card.content : ''}
        <button className="card__close" onClick={() => this.onDeleteClick(card.id)}>&#10008;</button>
      </div>
    )
  }
}

export default Card;