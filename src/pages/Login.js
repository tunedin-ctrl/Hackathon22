import React from 'react';
import './wrapper.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Placeholder from '../components/Placeholder';

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import '../components/Dashboard.css';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: '#060b26',
    },
  },
  card: {
    backgroundColor: 'transparent',
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    
  },

}));


function Login({ setCredentials, ...props }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  // const [error, setError]

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[2].value;
    if (!email || !password ) return;

    setLoading(true);
  
    axios.post(`https://h18abrownie.herokuapp.com/auth/login`, { email, password })
      .then((response) => {
        console.log(response);
        setCredentials(response.data);
        props.history.push('/dashboard');
      })
      .catch((err) => { setError("Login failed. Please try again!"); })
      .finally(() => setLoading(false));
  }
  const classes = useStyles();
  return(
      <Container component="main" maxWidth="sm">
        <Box boxShadow={3} className={classes.card}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Login
          </Typography>
          {
            loading
              ? <div style={{ marginTop: "64px" }}><Placeholder /></div>
              : <form noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
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
                <div className="loading">{error ? <Typography variant='body1'>{error}</Typography> : null}</div>
                <Grid container direction="column" alignItems="center">
                  <Grid item>
                    <br />
                    <Link href="/register" variant="body1">
                      {"Don't have an account? Register"}
                    </Link>
                  </Grid> 
                  <Grid item>
                    <br />
                    <Link href="/forgot_password" variant="body1">
                      Forgot password?
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
 
