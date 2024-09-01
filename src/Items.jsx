import SingleItem from "./SingleItem"

const Items = ({items, removeItem}) => {
  return (
   <>
    {items.map((item) => {
     return <SingleItem key={item.uid} item={item} removeItem={removeItem}/>
    })}
   </>
  )
}
export default Items