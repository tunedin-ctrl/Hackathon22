import './App.css';
import React from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Grid
} from '@material-ui/core';
import QueryCard from './Componenets/QueryCard'

function App() {
  /**
   * TODO: 
   * Add QueryCard window to app
   * Implement load_data function in LoadQueryCard.js
   */
   const [loading, setLoading] = React.useState(false);
   const [queries, setqueries] = React.useState([]);
   function handleDoubleClick () {
     const query_string = window.getSelection.toString()
 
     // setLoading(true);
    setqueries("hi")
    //  axios.post(`/search`, { query_string })
    //    .then((response) => {
    //      console.log(response);
    //      setqueries(response.data)
    //    })
    //    .catch((err) => { console.log(err) })
    //    .finally(() => setLoading(false));
  }
   return(
        
          loading
            ?<Grid container spacing={2}>
            {queries.map(query => (
                <QueryCard query={query} handleDoubleClick={handleDoubleClick}/>
              ))}
            </Grid> 

            : 
            null
  );
}
 

export default App;
