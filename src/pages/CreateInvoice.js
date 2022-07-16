import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Credentials from '../Credentials';
import Placeholder from '../components/Placeholder';
import JSONPretty from "react-json-pretty";
import JSONPrettyMon from "react-json-pretty/dist/adventure_time";
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

function CreateInvoice() {
  const [selectedFile, setSelectedFile] = React.useState();  
  const [report, setReport] = React.useState();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const token = React.useContext(Credentials);
  
  function handleSubmit(event) {
    event.preventDefault();

    setSelectedFile(event.target[0].files[0]);
    const file = selectedFile;
    const filename = event.target[2].value;
    if (!file || !filename) return;
    setLoading(true);
    const formData = new FormData();

    formData.append('token', token.replace(/['"]+/g, ''));
    formData.append('file', file);
    formData.append('filename', filename);
    
    axios({
      method: "post",
      url: `https://h18abrownie.herokuapp.com/invoice/create/v2`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(JSON.parse(JSON.stringify(response.data)));
        setReport(JSON.stringify(response.data));
      })
      .catch((error) => { setError("File is not xml format or report type is not correct") })
      .finally(() => setLoading(false));
    }
    const classes = useStyles();

  return(
    <div><Navbar/>
      <Container component="main" maxWidth="lg">
        <Box boxShadow={3} className={classes.card}>
          <Typography component="h1" variant="h2">
            Create Invoice
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
                id="file"
                name="file"
                type="file"
                autoFocus 
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Filename"
                label="Filename"
                type="text"
                id="Filename"
                autoFocus
              />
              <Button type="submit" fullWidth variant="contained" color="primary">
              Create Invoice
              </Button>
              <div className="report">{report ? <JSONPretty id="json-pretty" style={{fontSize: "1.2em"}} data={report} theme={JSONPrettyMon} ></JSONPretty> : <Typography variant='body1'>{error}</Typography>}</div>
            </form>
          }
        </Box>
      </Container>
    </div>
  );
}

export default CreateInvoice;
// UploadInvoice.propTypes = {
//   setSelectedFile: PropTypes.func.isRequired
// }

