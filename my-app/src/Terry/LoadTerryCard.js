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
  

  return(
    <Container component="main" maxWidth="sm">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Terry Card
        </Typography>
        {
          loading
            ? <div className="Card"></div> // When loading, show blank card
            : <Card newTerryCard onmouseup={() => handleStartQuery()}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="input_line"
                label="Email"
                name="email"
                type="text"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
                </Button>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <br />
                  <Link href="/register" variant="body1">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Card>
        }
      </Box>
    </Container>
  );
}
export default Login;

Login.propTypes = {
  setCredentials: PropTypes.func.isRequired
}