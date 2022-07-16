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
import TerryCard from './TerryCard';


function LoadTerryCard({ f, ...props }) {
  const [loading, setLoading] = React.useState(false);
  const [funny_response_state] = null;

  function handleStartQuery() {
    funny_response.set() = window.getSelection.toString()

    // setLoading(true);
  
    axios.post(`/search`, { funny_response })
      .then((response) => {
        console.log(response);
        f(response.data);
        props.history.push('/dashboard');
      })
      .catch((err) => { })
      .finally(() => setLoading(false));
  }
  newTerryCard = new TerryCardField(); 

  return(
    <Container component="main" maxWidth="sm">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Terry Card
        </Typography>
        {
          loading
            ? <div className="Card"></div> // When loading, show blank card
            : <TerryCardField newTerryCard onmounseup={() => handleStartQuery()}>
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
            </form>
        }
      </Box>
    </Container>
  );
}
export default Login;

Login.propTypes = {
  setCredentials: PropTypes.func.isRequired
}