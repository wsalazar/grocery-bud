import { useState } from "react";

const Form = ({addItem}) => {
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.item.value === '') {
    console.log("Empty value")
    return;
    }
    addItem(e.target.item.value)
    setNewItem('')
   }

  return (
    <>
     <form className="grocery-bud-form" onSubmit={(e) => handleSubmit(e)}>
      <input 
      id="item" 
      name="item" 
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="btn">Add Item</button>
     </form>
    </>
  )
}
export default Form