import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:6f6ef6c4-148a-4a60-a688-dc5a58367626",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_UCwhaHneG",
  "aws_user_pools_web_client_id": "2prs0r6cnja2ennf03gb3c84gq",
  "oauth": {}
};

Amplify.configure(awsmobile);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
