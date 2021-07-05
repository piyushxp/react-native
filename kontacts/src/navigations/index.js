import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text} from 'react-native';

const AppNavContainer = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false); //to keep a check on authentication

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  const getUser = async () => {
    try {
      // console.log('getUser try block');
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log('authLoaded :>> ', authLoaded);
  console.log('isLoggedIn :>> ', isLoggedIn);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
