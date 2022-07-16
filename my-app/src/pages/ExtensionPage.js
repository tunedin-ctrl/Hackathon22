import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import QueryCard from '../Componenets/QueryCardField';

/**
 * 
 * \@param {*} load_data : Function that takes two arguments. 
 * Loads QueryCard from HTTP response data.
 * @returns 
 */
function ExtensionPage() {
  /**
   * Refactoring:
   * 
   * - handling of state variables
   * - Define function input
   * 
   */
  const [loading, setLoading] = React.useState(false);
  var query_string_state = null;
  var query = new QueryCard(); 

  function handleClick () {
    query_string = window.getSelection.toString()

    // setLoading(true);
  
    axios.post(`/search`, { query_string })
      .then((response) => {
        console.log(response);
        // load_data(new_terry_card, response.data);
      })
      .catch((err) => { console.log(err) })
      .finally(() => setLoading(false));


  }
  
  /**
   * What to return (?)
   */
  return(
    <Container component="main" maxWidth="sm">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Terry Card
        </Typography>
        {
          loading
            ? <div className="QueryCard"></div> 
            : <QueryCard newQueryCard onmouseup={() => handleStartQuery()}>
                
            </QueryCard>
        }
      </Box>
    </Container>
  );
}
export default Login;

Login.propTypes = {
  setCredentials: PropTypes.func.isRequired
}