import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState([]);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.uid !== id)
    setItems(newItems)
  }

  const addItem = (newValueItem) => {
    const item = {
      name: newValueItem,
      completed: false,
      uid: nanoid()
    };
    setItems([...items ,item])
  }

  return (
    <>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem}/>
    </>
  )
};

export default App;
