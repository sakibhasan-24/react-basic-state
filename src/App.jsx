import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
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
