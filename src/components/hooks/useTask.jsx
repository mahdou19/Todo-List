import axios from "axios";
import Toaster from "../common/Toaster.jsx";
import { render } from "@testing-library/react";

export function useTask() {
  async function FetchAllTask() {
    const response = await axios.get("http://localhost:4000/taskProgress");
    return response.data;
  }
  async function AddTask(data) {
    return await axios.post("http://localhost:4000/taskProgress", data);
    
  }
  async function DeleteTask(id) {
    await axios.delete(`http://localhost:4000/taskProgress/${id}`)
    .then(data => {
      console.log(data);
      render(
        <Toaster  severity={"error"} message={"Deleted"}/>,
    )
    })
    
  }

  return { FetchAllTask, AddTask, DeleteTask}
}
