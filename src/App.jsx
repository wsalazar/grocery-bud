import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const App = () => {

  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('items')) || [];
  }
  const [items, setItems] = useState(getLocalStorage());
  const setLocalStorage = (item) => {
    localStorage.setItem('items', JSON.stringify(item))
  }
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.uid !== id)
    setItems(newItems)
    setLocalStorage(newItems)
  }
  const editItem = (uid) => {
    const newItems = items.map((item) => {
      if (item.uid === uid) {
        const newItem = {...item, completed: !item.completed}
        return newItem;
      } else {
        return item;
      }
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const addItem = (newValueItem) => {
    const item = {
      name: newValueItem,
      completed: false,
      uid: nanoid()      
    };
    const newItems = [...items ,item]
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const resetItems = () => {
    setItems([])
    localStorage.clear()
  }

  return (
    <>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
      <button className="btn" onClick={() => resetItems()} >Reset</button>
    </>
  )
};

export default App;
