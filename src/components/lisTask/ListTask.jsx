import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TaskItem from "./TaskItem.jsx";

function ListTask() {
    const [progressTasks, setprogressTasks] = useState([
        { id: 1, name: "Ma première tache", done: true },
        { id: 3, name: "Ma deuxième tache", done: true },
        { id: 2, name: "Ma deuxième tache", done: true },
        { id: 4, name: "Ma deuxième tache", done: true },
      ]);
    // const [doneTasks, setDoneTasks] = useState([
    //     { id: 1, name: "Ma première tache", done: true },
    //     { id: 2, name: "Ma deuxième tache", done: true },
    //   ]);

const handleDelete = (id)=>{
    
      const array1 = [...progressTasks]
     
      const newTask = array1.filter((el) => el.id !==id);
    
      setprogressTasks(newTask)
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
        <TaskItem title="Tache En cours" items={progressTasks} handleDelete={handleDelete} />
      </Grid>
      {/* <Grid item>
        <TaskItem title="Tache Fini" items={doneTasks} handleDelete={handleDelete}/>
      </Grid> */}
      </Grid>
    </Box>
  );
}

export default ListTask;
