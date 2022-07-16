import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CredentialsAdmin } from './Credentials'
// dashboard is home dir
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/protectedRoutes';
import UploadInvoice from './pages/invoiceUpload';
import ListReport from './pages/ReportList';
import invoiceEmailReceive from './pages/invoiceEmailReceive';
import InvoiceSend from './pages/invoiceSend';
// import InvoiceRemove from './pages/invoiceRemove';
import reportsRead from './pages/reportsRead';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Footer from './components/Footer';
import InvoiceCreation from './pages/CreateInvoice';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SubscriptionPage from './pages/SubscriptionPage';
// import API_receive must be protected route

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3944BC'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  // Title of the app
  document.title = 'Invoice Hub';
  // Creating states for token, noToken
  const [token, SetToken] = React.useState(sessionStorage.getItem('token'));
  
  function setCredentials(token) {
    sessionStorage.setItem('token', JSON.stringify(token));
    SetToken(JSON.stringify(token))
  }
  return (
    // Ensures any route ensures the need of token
    <div className='bg'>
      <MuiThemeProvider theme={theme}>
        <CredentialsAdmin value={token}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return <Login {...props} setCredentials={setCredentials} />;
                }}
              />
              <Route
                path="/register"
                render={(props) => {
                  return <Register {...props} setCredentials={setCredentials} />;
                }}
              />
              <Route exact path="/forgot_password" component={ForgotPasswordPage} />
              <Route exact path="/reset_password" component={ResetPasswordPage} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/subscription" component={SubscriptionPage} />
              <ProtectedRoute path="/invoice/upload/api" component={UploadInvoice} />
              <ProtectedRoute path="/invoice/upload/email" component={invoiceEmailReceive} />
              <ProtectedRoute path="/report/list" component={ListReport} />
              <ProtectedRoute path="/invoice/send" component={InvoiceSend} />
              {/* <ProtectedRoute path="/invoice/remove" component={InvoiceRemove} /> */}
              <ProtectedRoute path="/report/read" component={reportsRead} />
              <ProtectedRoute path="/invoice/create" component={InvoiceCreation} />
              
            </Switch>
          </BrowserRouter>
        </CredentialsAdmin>
        <Footer/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
/* <ProtectedRoute path="/invoice/remove" component={InvoiceRemove} /> */