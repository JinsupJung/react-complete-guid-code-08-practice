import React from "react";
import Button from "./Button";

const AlertMessage = ({ isOpen, children, closeModal }) => {
  console.log(isOpen);
  // setTimeout(() => closeModal(), 1000);
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          maxWidth: "80%",
          maxHeight: "90%",
          overflowY: "auto",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{background: 'pink', color: "red", textAlign: "center", fontSize: "2rem"}}>Invalid Input</h1>

      <div>{children}</div>
      <Button onClick={closeModal}>Close</Button>
    </div>
    </div>
  );
};

export default AlertMessage;
