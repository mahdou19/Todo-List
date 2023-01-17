import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



import TaskItem from "./TaskItem.jsx";
import { useTask } from "../hooks/useTask.jsx";
import axios from "axios";

function ListTask() {
  
      const [progressTasks, setProgressTasks] = useState([]);
      const {FetchAllTask, DeleteTask} = useTask()

      async function fetchTask(){
        const data = await FetchAllTask()
        setProgressTasks(data);
      }
      
     
      useEffect( () => {
        fetchTask()
      }, []);

const handleDelete = async (id)=>{
      await DeleteTask(id)
      fetchTask()
    }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Listes des taches
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <TaskItem title="Tache En cours" items={progressTasks} handleDelete={handleDelete}/>
      </Grid>
      {/* <Grid item>
        <TaskItem title="Tache Fini" items={doneTasks} handleDelete={handleDelete}/>
      </Grid> */}
      </Grid>
    </Box>
  );
}

export default ListTask;
