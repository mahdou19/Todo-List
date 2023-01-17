import React from 'react'
import Form from './form/Form.jsx'
import ListTask from './lisTask/ListTask.jsx'
import Container from '@mui/material/Container';


function MainPage() {
  
 
  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    marginTop: "20px",
    }}>
        <ListTask />
        <Form/>
      </Container>
  )
}

export default MainPage