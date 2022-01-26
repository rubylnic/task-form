import ClockItem from "./ClockItem";


function ClockItems(props) {
  const clockItems = props.clockItems;
  const handleDelete = props.handleDelete;
  return (
    <>
      {clockItems.map(item => (
        <ClockItem clock={item} id={item.id} key={item.id} handleDelete={handleDelete} />
      ))}
    </>
  )
}


export default ClockItems;