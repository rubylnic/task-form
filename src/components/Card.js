import React from "react";


class Card extends React.Component  {
  deleteHandle = this.props.deleteHandle;
  loadActualCards = this.props.loadActualCards;

  state = {
    deleted: false,
  }

  onDeleteClick = (evt) => {
    this.deleteHandle(evt);
    this.loadActualCards();
  }

  render() {
    const card = this.props.props;
    return (
      <div className="card" id={card.id}>
      {card.content ? card.content : ''}
      <button className="card__close" onClick={this.onDeleteClick}>&#10008;</button>
      </div>
    )
  }
}

export default Card;