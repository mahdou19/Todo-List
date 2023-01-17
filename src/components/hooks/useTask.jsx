import axios from "axios";

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
    .then(data => console.log("Task Delete"))
    
  }

  return { FetchAllTask, AddTask, DeleteTask}
}
