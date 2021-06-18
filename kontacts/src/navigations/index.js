import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  console.log(isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
