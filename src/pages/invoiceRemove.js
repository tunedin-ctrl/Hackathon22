import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Credentials from '../Credentials';

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';

function InvoiceRemove() {
  const [removed, setRemoved] = React.useState(false);
  const [error, setError] = React.useState();

  const tmp = React.useContext(Credentials);
  
  function handleSubmit(event) {
    event.preventDefault();

    const invoice_id = event.target[0].value;
    console.log(invoice_id);
    if (!invoice_id) return;
    

    const token = tmp.replace(/['"]+/g, '');
    axios.delete(`https://h18abrownie.herokuapp.com/invoices/remove`, {
      data: {
        token: `${token}`,
        invoice_id: `${invoice_id}`
      },
    }) 
    .then(() => {
      setRemoved = true;
      // console.log(response.data);
    })
    .catch((err) => { setError("Invoice does not exist!") });
    } 

  return(
    <div><Navbar/>
      <Container component="main" maxWidth="lg">
        <Box boxShadow={1}>
          <Typography component="h1" variant="h2">
            Remove Invoice
          </Typography>
          {
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="invoice_id"
                name="invoice_id"
                label="Invoice ID"
                type="text"
                autoFocus 
              />
              <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
              </Button>
              <div className="removed">{removed ? <p>Status: {removed}</p> : <p>{error}</p>}</div>
            </form>
          }
        </Box>
      </Container>
    </div>
  );
}

export default InvoiceRemove;

