// src/index.tsx

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import { Provider } from 'react-redux';
import App from '../App';
import store from './store/store';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
