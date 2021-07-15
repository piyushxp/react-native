import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from './configureStore';
import changeCount from './redux/actions/counts';
import CreateAdScreen from './screens/CreateAdScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const App = () => {
  return (
    <View>
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
      <CreateAdScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
