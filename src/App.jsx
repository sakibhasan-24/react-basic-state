import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  return (
    <>
      {/* <Add />
      <Modal /> */}
      <Form handleAddItems={handleAddItems} />
      <ListItems items={items} handleDelete={handleDelete} />
    </>
  );
}

export default App;
// open modal
// close modal
function ListItems({ items, handleDelete }) {
  // console.log(items);
  // we need to delete from list items when we clicked X button
  // const handleDelete = (id) => {
  //   // yes easily i get my id which one i want to delete.but problem is that i want delete from list items.so i need to go list items in the top but i can't go there
  // };
  return (
    <main>
      <div className="list-items">
        <ul className="lists">
          {items.map((item) => (
            <li key={item.id}>
              {item.inputValue} {item.quantity}
              <span onClick={() => handleDelete(item.id)}>&#10060;</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
function Form({ handleAddItems }) {
  const options = Array.from(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ))
  );

  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);
  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    const newItems = {
      inputValue,
      quantity,
      isExpensive: false,
      id: Date.now(),
    };
    handleAddItems(newItems);
    setInputValue("");
    setQuantity(1);
    // console.log(newItems);
    // console.log(event);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {options}
        </select>
        <input
          type="text"
          value={inputValue}
          name=""
          placeholder="items...."
          id=""
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
function Modal() {
  const closeStyle = {
    margin: "40px",
    cursor: "pointer",
    textAlign: "center",
  };
  const [modalState, setModalState] = useState(true);
  return (
    <>
      <h2 style={closeStyle} onClick={() => setModalState((state) => !state)}>
        X
      </h2>
      {modalState && (
        <div className="modal">
          <h3>This is our text</h3>
        </div>
      )}
    </>
  );
}

function Add() {
  const [value, setValue] = useState(0);
  const handleAdd = () => {
    // setValue((v) => v + 1);
    setTimeout(() => {
      setValue((v) => v + 1);
      // setValue(value + 1);
    }, 2000);
  };
  const handleRemove = () => {
    setValue((v) => v - 1);
  };
  return (
    <>
      <p>{value}</p>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleRemove}>REDUCE</button>
    </>
  );
}
