import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigation/navigation';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
