import Card from '../components/SubscriptionCard';
import Navbar from '../components/Navbar';
import {
    Typography,
    Container,
    Box,
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

  
function SubscriptionPage() {
let myPrices = [
  {
    plan: "FREE",
    price: "$0/month",
    features: [
      {
        name: "50 Invoice Capacity",
        isEnabled: true
      },
      {
        name: "Send Invoices and Quotes",
        isEnabled: true
      },

      {
        name: "24/7 Online Support",
        isEnabled: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: "$19/month",
    features: [
      {
        name: "200 Invoice Capacity",
        isEnabled: true
      },
      {
        name: "Send Invoices and Quotes",
        isEnabled: true
      },

      {
        name: "24/7 Online Support",
        isEnabled: true        }
    ]
  },
  {
    plan: "PRO",
    price: "$49/month",
    features: [
        {
            name: "500 Invoice Capacity",
            isEnabled: true
          },
          {
            name: "Send Invoices and Quotes",
            isEnabled: true
          },
    
    
          {
            name: "24/7 Online Support",
            isEnabled: true
          }
    ]
  }
]
const classes = useStyles();
 return (
    <div><Navbar/>
    <Container component="main" maxWidth="lg">
      <Box boxShadow={3} className={classes.card}>
        <Typography component="h1" variant="h2">Subscription</Typography>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {
                myPrices.map( (obj) =>{return<Card data={obj}></Card>})   // store data in myPrices map to card 
              }
            </div>
          </div>
        </section>
      </Box>
    </Container>
    </div>
  );
}

export default SubscriptionPage;