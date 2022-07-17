import './App.css';
import React from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core';


function App() {
  /**
   * TODO: 
   * Add QueryCard window to app
   * Implement load_data function in LoadQueryCard.js
   */
   const [loading, setLoading] = React.useState(false);
   var query_string_state = null;
   var query = new QueryCard(); 
 
   function handleDoubleClick () {
     const query_string = window.getSelection.toString()
 
     // setLoading(true);
   
     axios.post(`/search`, { query_string })
       .then((response) => {
         console.log(response);
         // load_data(new_terry_card, response.data);
       })
       .catch((err) => { console.log(err) })
       .finally(() => setLoading(false));
  }
   return(
    <Container component="main" maxWidth="sm">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Terry Card
        </Typography>
        {
          loading
            ? <div className="QueryCard"></div> 
            : <QueryCard newQueryCard onDoubleClick = {() => handleDoubleClick()}>
                
            </QueryCard>
        }
      </Box>
    </Container>
  );
}
 

export default App;
