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
import TerryCard from './TerryCardField';

/**
 * 
 * @param {*} load_data : Function that takes two arguments. 
 * Loads TerryCard from HTTP response data.
 * @returns 
 */
function LoadTerryCard({ load_data, ...props }) {
  /**
   * Refactoring:
   * 
   * - handling of state variables
   * - Define function input
   * 
   */
  const [loading, setLoading] = React.useState(false);
  var query_string_state = null;
  var new_terry_card = new TerryCard(); 

  function handleStartQuery() {
    query_string = window.getSelection.toString()

    // setLoading(true);
  
    axios.post(`/search`, { query_string })
      .then((response) => {
        console.log(response);
        // load_data(new_terry_card, response.data);
        props.history.push('/dashboard'); // TODO: Implement dashboard
      })
      .catch((err) => { })
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
            ? <div className="TerryCard"></div> 
            : <TerryCard newTerryCard onmouseup={() => handleStartQuery()}>
                
            </TerryCard>
        }
      </Box>
    </Container>
  );
}
export default Login;

Login.propTypes = {
  setCredentials: PropTypes.func.isRequired
}