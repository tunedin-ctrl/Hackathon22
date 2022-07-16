import React from 'react';
// Creating this allows us to parse the token into routes
const Credentials = React.createContext();
//Provider to pass the token
export const CredentialsAdmin = Credentials.Provider;
export const CredentialsUser = Credentials.Consumer;
export default Credentials;