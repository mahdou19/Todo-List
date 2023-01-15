import * as React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Divider from '@mui/material/Divider';
import { Button } from "@mui/material";

export default function TaskItem({title, items}) {
    const [checked, setChecked] = React.useState(items.done);

    const handleChange = (event) => {
        console.log(event.target.checked);
      };
 
  return (
    <Card>
    <CardHeader
      sx={{ px: 2, py: 1 }}
      title={title}
    //   subheader={`${numberOfChecked(items)}/${items.length} selected`}
    />
    <Divider />
    <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
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
              <Button>X</Button>
            </ListItem>
          );
        })}
      </List>
   </Card>  
  );
}
