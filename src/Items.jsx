import SingleItem from "./SingleItem"

const Items = ({items, removeItem, editItem}) => {
  
  return (
   <>
    {items.map((item, index) => {
     return <SingleItem key={index} item={item} removeItem={removeItem} editItem={editItem}/>
    })}
   </>
  )
}
export default Items