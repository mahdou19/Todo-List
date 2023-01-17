import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskItem from "./TaskItem.jsx";
import { useTask } from "../hooks/useTask.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setTasksData } from "../../feature/task.slice.js";

function ListTask() {

  const {FetchAllTask} = useTask()

  const dispatch = useDispatch();
  const tasksData = useSelector((state) => state.tasks.tasks)

  async function fetchTask(){
    const data = await FetchAllTask()
    dispatch(setTasksData(data));
  }
  useEffect( () => {
    fetchTask()
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
          
      }}
    >
      <Typography variant="h4" gutterBottom>
        Listes des taches
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <TaskItem title="Tache En cours" tasksData={tasksData} fetchTask={fetchTask} />
      </Grid>
      <Grid item>
        <TaskItem title="Tache En Fini" tasksData={tasksData} fetchTask={fetchTask} />
      </Grid>
      </Grid>
    </Box>
  );
}

export default ListTask;
