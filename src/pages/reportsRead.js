import React from 'react';
import './wrapper.css';
import axios from 'axios';
import './wrapper.css';
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

function ReportsRead() {

  const [htmlString, setHtmlString] = React.useState();
  const [error, setError] = React.useState();
  const tmp = React.useContext(Credentials);
  const token = tmp.replace(/['"]+/g, '');

  function handleSubmit(event) {
    event.preventDefault();
    const report_id = event.target[0].value;
    if (!report_id) return;

    axios.get(`https://h18abrownie.herokuapp.com/reports/read`, {
      params: {
        token: token,
        report_id: report_id
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
            Read Report
          </Typography>
          {
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Report id"
                name="Report id"
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

export default ReportsRead;
