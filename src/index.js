import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:bb3dfd86-fbaf-4053-a095-a98661c66835",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_UCwhaHneG",
  "aws_user_pools_web_client_id": "2prs0r6cnja2ennf03gb3c84gq",
  "oauth": {},
  "aws_appsync_graphqlEndpoint": "https://4xkqsduwrzg4vftnfzwwfjyymy.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-oen6uyjowfgerdur3orbrlbeu4",
  "aws_user_files_s3_bucket": "synerginotesapp163808-dev",
  "aws_user_files_s3_bucket_region": "us-east-1"
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
