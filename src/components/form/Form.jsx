import React, { useState } from "react";
import "./form.css";
import { useTask } from "../hooks/useTask.jsx";
import Toaster from "../common/Toaster.jsx";
import { render } from "@testing-library/react";

function Form() {
   
    const [input, setInput] = useState("")
    
    const {AddTask} = useTask()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime()
        const name = input
        const done = false
        const newTask = {id, name, done}
        AddTask(newTask).then((res)=>{
          if(res.statusText === "Created"){
            render(
              <Toaster  severity={"success"} message={res.statusText} />,
          )
          }else{
            render(
              <Toaster  severity={"error"} message={res.statusText}/>,
          )
          }
         
        })
        setInput("")
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
