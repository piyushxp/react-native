/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigations';

const App = () => {
  return <AppNavContainer />;
};

export default App;
