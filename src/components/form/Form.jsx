import React from "react";
import "./form.css";


function Form() {
  return (
    <form onSubmit="submit">
      <input type="text" placeholder="Ajouter une tache" />
      <button>Ajouter</button>
    </form>
  );
}

export default Form;
