import React, { useState } from "react";
import "./form.css";
import { useTask } from "../hooks/useTask.jsx";
import Toaster from "../common/Toaster.jsx";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { addTask } from "../../feature/task.slice.js";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const { AddTask } = useTask();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(input){
      const id = new Date().getTime();
      const name = input;
      const done = false;
      const newTask = { id, name, done };
      await AddTask(newTask).then((res) => {
        dispatch(addTask(newTask));
        if (res.statusText === "Created") {
          render(<Toaster severity={"success"} message="Tache créé" />);
        }
      });

    }
   

    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tache"
        onChange={handleChange}
        value={input}
      />
      <button>Ajouter</button>
    </form>
  );
}

export default Form;
