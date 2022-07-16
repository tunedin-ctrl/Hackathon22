import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Credentials from '../Credentials';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core';
import ReportCard from '../components/ReportCard';
import NewWindow from 'react-new-window';
import './wrapper.css';


const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
  },
}));

function ListReport() {
    const [reports, setReports] = React.useState([]);
    const [content, setContent] = React.useState();
    const [load, setLoad] = React.useState(false);
    const [receive, setReceive] = React.useState(false);

    const tmp = React.useContext(Credentials);
    const token = tmp.replace(/['"]+/g, '');
    const params = new URLSearchParams([['token', token]]);
    
    axios.get('https://h18abrownie.herokuapp.com/reports/list', {
      params: {
        token: token
      }
    })
    .then((response) => { 
      setReports(response.data);
      setReceive(true);
    }, []);
    
    const handleReport = async (report_id) => {
      axios.get(`https://h18abrownie.herokuapp.com/reports/read`, {
        params: {
          token: token,
          report_id: report_id
        }
      })
      .then((response) => {
          setContent(response.data)
          setLoad(true);
        setContent(response.data)
        // setHtmlString(response.data);
    }, []);
  }
  const classes = useStyles();
    
  return (
    <div><Navbar/>
    
    <Container component="main" maxWidth="lg">
    <Box boxShadow={3} className={classes.card}>
      <div className='wrapper'>
        <Typography style={{ marginBottom: 10 }}variant="h1" noWrap>
          Report List
        </Typography>
        <Grid container spacing={2} style={{ marginLeft: 35 }}>
          {reports.map(report => (
            <Grid item key={report.report_id} xs={12} md={6} lg={4}>
              <ReportCard report={report} handleReport={handleReport}/>
            </Grid>
          ))} 
          </Grid>
        </div>
        </Box>
      </Container>
     
      {load?
      <NewWindow features={{ width: 380, height: 380 }} title="Report">
        <div dangerouslySetInnerHTML={{ __html:  content }}/>
      </NewWindow>
        :
        null
      }
    </div>
    );
  }
   
export default ListReport;
