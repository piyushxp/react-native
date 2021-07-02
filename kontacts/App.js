/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import 'react-native-gesture-handler';
import env from './src/config/env';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  console.log(env);
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
