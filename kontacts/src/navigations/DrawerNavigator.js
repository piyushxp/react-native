import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import {GlobalContext} from '../context/Provider';
import HomeNavigator from './HomeNavigator';
import SlideMenu from './SlideMenu/index';

const getDrawerContent = (navigation, authDispatch) => {
  return <SlideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const {authDispatch} = React.useContext(GlobalContext);
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
