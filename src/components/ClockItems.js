import ClockItem from "./ClockItem";
import { nanoid } from 'nanoid'

function ClockItems(props) {
  const clockItems = props.clockItems;
  const handleDelete = props.handleDelete;
  return (
    <>
      {clockItems.map(item => (
       <ClockItem clock={item} id={nanoid()} key={nanoid()} handleDelete={handleDelete}/>
      ))}
    </>
  )
}


export default ClockItems;