import { useState } from "react"

const SingleItem = ({uid, item, removeItem, editItem}) => {
 return (
    <>
      <article key={uid}>
      <input 
      type="checkbox" 
      className="item" 
      checked={item.completed}
      onChange={() => editItem(item.uid)}
      /> 
     <span 
     style={{
      textDecoration: item.completed && 'line-through'
    }}
     > 
     {item.name}
     </span>
     <button className="btn" onClick={() =>removeItem(item.uid)}>Remove Item</button>
     </article>
    </>
  )
}
export default SingleItem