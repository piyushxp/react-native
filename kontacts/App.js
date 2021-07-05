/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import React from 'react';
import 'react-native-gesture-handler';
// import env from './src/config/env';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
