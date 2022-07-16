import React from 'react';
import axios from 'axios';
import './center.css';
import Navbar from '../components/Navbar';

import Credentials from '../Credentials';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';

function InvoiceRead() {

  const [htmlString, setHtmlString] = React.useState();
  const [error, setError] = React.useState();
  const tmp = React.useContext(Credentials);
  const token = tmp.replace(/['"]+/g, '');

  function handleSubmit(event) {
    event.preventDefault();
    const invoice_id = event.target[0].value;
    if (!invoice_id) return;

    axios.get(`https://h18abrownie.herokuapp.com/invoices/read`, {
      params: {
        token: token,
        invoice_id: invoice_id
      }
    })
    .then((response) => {
      console.log(response);
      setHtmlString(response.data);
    })
    .catch((err) => { setError(err); })
  }
    
  return(
    <div><Navbar/>
      <Container component="main" maxWidth="sm">
        <Box boxShadow={1}>
          <Typography component="h1" variant="h2">
            Read Invoice
          </Typography>
          {
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="invoice id"
                name="invoice id"
                type="number"
                autoFocus 
              />
              <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
              </Button>
              <div class="center">
                <div dangerouslySetInnerHTML={{ __html:  htmlString }} />
              </div>
            </form>
          }
        </Box>
      </Container>
    </div>
  );
}

export default InvoiceRead;
