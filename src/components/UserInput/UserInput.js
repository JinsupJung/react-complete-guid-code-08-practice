import React, { useState } from "react";

import Button from "../UI/Button";
import styles from "./UserInput.module.css";
import AlertMessage from "../UI/AlertMessage";

const UserInput = (props) => {
  // const [enteredValue, setEnteredValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    id: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Invalid Input");

  const openModal = () => {
    console.log("open moal function");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log("close moal function");
    setIsModalOpen(false);
  };
  const userInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(setFormData);
    // setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (formData.name.trim().length === 0 || formData.age.trim().length === 0) {
      setIsValid(false);
      // console.log("formSubmitHandler open moal function");
      setErrorMsg((prevMsg) => setErrorMsg("Name or age is blank!"))
      openModal();
      return;
    }
    if (Number(formData.age) < 0) {
      setErrorMsg((prevMsg) => setErrorMsg("Age is below zero!"))
      openModal();
      return;
    }

    closeModal();
    // console.log(formData);
    props.onAddUser(formData);
    setFormData({ name: "", age: "" });
    return ; 
  };

  return (
    <div>
      <div style={isModalOpen ? { display: "block" } : { display: "none" }}>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <AlertMessage isOpen={isModalOpen} closeModal={closeModal}>
          <h2>{errorMsg}</h2>
        </AlertMessage>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="name" onChange={userInputChangeHandler} />
          <label htmlFor="age">Age (years)</label>
          <input type="text" id="age" name="age" onChange={userInputChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
