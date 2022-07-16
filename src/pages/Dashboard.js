import React from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Credentials from '../Credentials';
import InvoiceCard from '../components/InvoiceCard'
import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import NewWindow from 'react-new-window';
import '../components/Dashboard.css'
import {ProgressBar} from 'react-bootstrap'

function Dashboard() {
    
    const [invoices, setInvoices] = React.useState([]);
    const [content, setContent] = React.useState();
    const [total, setTotal] = React.useState();
    const [user, setUser] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const tmp = React.useContext(Credentials);
    const token = tmp.replace(/['"]+/g, '');
    const percentage = parseInt(total/50*100);
    const progressInstance = <ProgressBar animated now={percentage} label={`${percentage}%`} style={{ marginBottom: 15 }} />;

    axios.get('https://h18abrownie.herokuapp.com/invoices/list', {
      params: {
        token: token
      },
    })
    .then((response) => {
      // console.log(response)
      setInvoices(response.data);
      
    }, []);
    axios.get('https://h18abrownie.herokuapp.com/auth/total_invoice', {
        params: {
          token: token
        }
      })
      .then((response) => {
        // console.log(response)
        setTotal(response.data);    
    }, []);
    axios.get('https://h18abrownie.herokuapp.com/auth/email', {
      params: {
        token: token
      }
    })
    .then((response) => {
      // console.log(response)
      setUser(response.data);
    }, []);
    
    const handleDelete = async (invoice_id) => {
      axios.delete(`https://h18abrownie.herokuapp.com/invoices/remove`, {
      data: {
        token: `${token}`,
        invoice_id: `${invoice_id}`
      },
    }, []);
  }

  const handleRender = async (invoice_id) => {
      
      axios.get(`https://h18abrownie.herokuapp.com/invoices/render`, {
        params: {
          token: token,
          invoice_id: invoice_id
        },
      })
      .then((response) => {
        setContent(response.data);
        setLoading(true);
      })
      // .finally(() => setLoading(false));
  }

  return (
  <div><Navbar/>
    <div className="dashboard">
      <Container>
        <Typography style={{ marginBottom: 12 }}variant="h2">
          Welcome {user}!
        </Typography>
        <Typography style={{ marginTop: 8 }} variant="h4" noWrap>
          Invoices: {total} / 50
        </Typography>
        <div>
          {progressInstance}
        </div>
          <Grid container spacing={2}>
            {invoices.map(invoice => (
              <Grid item key={invoice.invoice_id} xs={12} md={6} lg={4}>
                <InvoiceCard invoice={invoice} handleDelete={handleDelete} handleRender={handleRender} loading={loading}/>
              </Grid>
            ))}
            
          </Grid>
          
      </Container>
    </div>

      {loading?
      <NewWindow features={{ width: 595, height: 842 }} title="Invoice">
        <div dangerouslySetInnerHTML={{ __html:  content }}/>
      </NewWindow>
        :
        null
      }
    </div>
  );
}

export default Dashboard;
