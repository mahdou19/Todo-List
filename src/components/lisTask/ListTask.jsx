import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskItem from "./TaskItem.jsx";

function ListTask() {

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
        <TaskItem title="Tache En cours" />
      </Grid>
      {/* <Grid item>
        <TaskItem title="Tache Fini" items={doneTasks} handleDelete={handleDelete}/>
      </Grid> */}
      </Grid>
    </Box>
  );
}

export default ListTask;
