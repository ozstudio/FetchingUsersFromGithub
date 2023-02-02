import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
//dev-0gmdagqky4jxpvhs.us.auth0.com
//RPFsdJeUsUn068Ii7fu9qdpBy0qFqph3

const providerConfig = {
  domain: "dev-0gmdagqky4jxpvhs.us.auth0.com",
  clientId: "RPFsdJeUsUn068Ii7fu9qdpBy0qFqph3",
  cacheLocation:'localstorage',
  authorizationParams: {
    redirect_uri: window.location.origin
  },
};

root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}
    >
    <GithubProvider>
    <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
