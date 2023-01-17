import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { useTask } from "../hooks/useTask.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setTasksData } from "../../feature/task.slice.js";
import ConfirmDialog from "../common/Dialog.jsx";

export default function TaskItem({ title, tasksData, fetchTask }) {
  const { DeleteTask } = useTask();
  const [checked, setChecked] = useState(tasksData.done);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [edit, setEdit] = useState(false);

  const handleDelete = async (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    await DeleteTask(id);
    fetchTask();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Card sx={{ px: 2, py: 1 }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        title={title}
        subheader={`Nombre de tache(s): ${tasksData.length} `}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: 400,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {tasksData.map((value) => {
          return (
            <ListItem key={value.id} role="listitem" button>
              <ListItemIcon>
                <Checkbox checked={checked} onChange={handleChange} />
              </ListItemIcon>
              <ListItemText primary={`${value.name}`} />
              <Button
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: `${value.name}`,
                    subTitle:
                      "Êtes vous sûre de vouloir supprimer cette tache?",
                    onConfirm: () => {
                      handleDelete(value.id);
                    },
                  });
                }}
              >
                X
              </Button>
            </ListItem>
          );
        })}
      </List>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </Card>
  );
}
