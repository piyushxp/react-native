/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import React from 'react';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {COLORS} from './src/assets/theme';

const store = configureStore();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    accent: COLORS.secondary,
  },
};

const ReduxMaterialWrapper = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </Provider>
);
AppRegistry.registerComponent(appName, () => ReduxMaterialWrapper);
