import React, { useEffect, useState } from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";
import { useTask } from "../hooks/useTask.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setTasksData } from "../../feature/task.slice.js";

export default function TaskItem({title}) {
   
    const {FetchAllTask, DeleteTask} = useTask()

    const dispatch = useDispatch();
    const tasksData = useSelector((state) => state.tasks.tasks)

    const [checked, setChecked] = useState(tasksData.done);

    async function fetchTask(){
      const data = await FetchAllTask()
      dispatch(setTasksData(data))
    }
    useEffect( () => {
      fetchTask()
    }, []);

    const handleDelete = async (id)=>{
      await DeleteTask(id)
      fetchTask()
    }

   ;
    const handleChange = (event) => {
        console.log(event.target.checked);
      };
  
 
  return (
    <Card>
    <CardHeader
      sx={{ px: 2, py: 1 }}
      title={title}
      subheader={`Nombre de tache(s): ${tasksData.length} `}
    />
    <Divider />
    <List
        sx={{
          width: 230,
          height: 250,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {tasksData.map((value) => {
          return (
            <ListItem
              key={value.id}
              role="listitem"
              button
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                />
              </ListItemIcon>
              <ListItemText primary={`${value.name}`} />
              <Button onClick={() => handleDelete(value.id)}>X</Button>
            </ListItem>
          );
        })}
      </List>
   </Card>  
  );
}
