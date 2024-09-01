import { useState } from "react"

const SingleItem = ({uid, item, removeItem}) => {
 const [isChecked, setIsChecked] = useState(item.completed)
 return (
    <>
      <article key={uid}>
      <input type="checkbox" className="item" onChange={(e) => setIsChecked(e.target.checked)}/> 
     <span style={{'textDecoration':`${isChecked?'line-through':''}`}}> {item.name}</span>
     <button className="btn" onClick={() =>removeItem(item.uid)}>Remove Item</button>
     </article>
    </>
  )
}
export default SingleItem