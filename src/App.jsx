import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Add />
      <Modal />
    </>
  );
}

export default App;
// open modal
// close modal
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
