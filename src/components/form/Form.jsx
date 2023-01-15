import React, { useState } from "react";
import "./form.css";

function Form() {
    const [input, setInput] = useState("")
    console.log(input);
    const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().now
        const name = input
        const done = false
        // AddTask(id, name, done)
    }
    const handleChange = (event) => {
        setInput(event.target.value);
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ajouter une tache" onChange={handleChange} value={input} />
      <button>Ajouter</button>
    </form>
  );
}

export default Form;
