import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/adventure_time";
import Credentials from '../Credentials';
import Placeholder from '../components/Placeholder';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
  },
}));

function InvoiceSend() {
  const [report, setReport] = React.useState();

  const tmp = React.useContext(Credentials);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const invoice_id = event.target[0].value;
    const recipientEmail = event.target[2].value;
    const filename = event.target[4].value;
    if (!invoice_id || !recipientEmail || !filename) return;
    setLoading(true);
    const token = tmp.replace(/['"]+/g, '');

    axios.post(`https://h18abrownie.herokuapp.com/invoice/send`, { token, invoice_id, recipientEmail, filename })
    .then((response) => {
      console.log(response.data);
      if (response.data === null) {
        setReport("Invoice has not been sent!");
      } else {
        setReport(JSON.stringify(response.data));
      }
    })
    .catch((err) => { setError("An error has occured. Please try again."); })
    .finally(() => setLoading(false));
    } 
    const classes = useStyles();

  return(
    <div><Navbar/>
      <Container component="main" maxWidth="lg">
        <Box boxShadow={3} className={classes.card}>
          <Typography component="h1" variant="h2">
            Send invoice to customer
          </Typography>
          {
            loading
            ? <div style={{ marginTop: "64px" }}><Placeholder /></div>
            :
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="invoice_id"
                name="invoice_id"
                label="Invoice Id"
                type="text"
                autoFocus 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="recipientEmail"
                name="Recipient Email"
                label="Recipient Email"
                type="email"
                autoFocus 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Filename"
                name="Filename"
                label="Filename"
                type="text"
                autoFocus 
              />
              <Button type="submit" fullWidth variant="contained" color="primary">
              Send Invoice
              </Button>
              <div className="report">{report ? <JSONPretty id="json-pretty" style={{fontSize: "1.2em"}} data={report} theme={JSONPrettyMon} ></JSONPretty>  : <Typography variant='body1'>{error}</Typography>}</div>
            </form>
          }
        </Box>
      </Container>
    </div>
  );
}

export default InvoiceSend;
// UploadInvoice.propTypes = {
//   setSelectedFile: PropTypes.func.isRequired
// }

