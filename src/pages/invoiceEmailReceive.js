import React from 'react';
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

function InvoiceEmailReceive() {
  const [report, setReport] = React.useState();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const tmp = React.useContext(Credentials);
  
  function handleSubmit(event) {
    event.preventDefault();

    const report_type = 'html';
    if (!report_type) return;
    setLoading(true);
    const formData = new FormData();
    const token = tmp.replace(/['"]+/g, '');

    axios.post(`https://h18abrownie.herokuapp.com/invoice/upload/IMAP`, { token, report_type })
    .then((response) => {
      console.log(response.data);
      if (response.data === null) {
        setReport("No new invoices received!");
      } else {
        setReport(JSON.stringify(response.data));
      }
    })
    .catch((err) => { 
      setError("An error has occurred. Please try again!");
      console.log(err);
    })
    .finally(() => setLoading(false));
  } 
  const classes = useStyles();


  return(
    <div><Navbar/>
      <Container component="main" maxWidth="lg">
      <Box boxShadow={3} className={classes.card}>
          <Typography component="h1" variant="h2">
            Receive email
          </Typography>
          {
             loading
             ? <div style={{ marginTop: "64px" }}><Placeholder /></div>
             :
            <form onSubmit={handleSubmit}>
              <Typography component="h4" variant="h5">
              Send Invoice to our service to receive here!
            </Typography>
              <Button type="submit" fullWidth variant="contained" color="primary">
              Receive Email
              </Button>
              <div className="report">{report ? <JSONPretty id="json-pretty" style={{fontSize: "1.2em"}} data={report} theme={JSONPrettyMon} ></JSONPretty>  : <Typography variant='body1'>{error}</Typography>}</div>
            </form> 
          }
        </Box>
      </Container>
      </div>
  );
}

export default InvoiceEmailReceive;
// UploadInvoice.propTypes = {
//   setSelectedFile: PropTypes.func.isRequired
// }

