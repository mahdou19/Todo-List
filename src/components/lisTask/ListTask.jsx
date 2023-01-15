import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function ListTask() {
 
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>
            Listes des taches
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item> Tache En Cours</Grid>
      <Grid item> Tache Fini</Grid>
    </Grid>     
    </Box>
  )
}

export default ListTask