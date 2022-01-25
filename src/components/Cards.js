import Card from "./Card";

function Cards({cards,deleteHandle,loadActualCards}) {
  return (
    <div className="cards">
      {cards.map(card => (
        <Card props={card} key={card.id} deleteHandle = {deleteHandle} loadActualCards={loadActualCards}/>
      ))}
    </div>
  )
}

export default Cards;