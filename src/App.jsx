import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* <Add />
      <Modal /> */}
      <Form />
    </>
  );
}

export default App;
// open modal
// close modal

function Form() {
  const options = Array.from(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => (
      <option key={x} value={x}>
        {x}
      </option>
    ))
  );

  return (
    <div>
      <form className="form">
        <select>{options}</select>
        <input type="text" name="" placeholder="items...." id="" />
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
