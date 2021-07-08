import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import {HOME_NAVIGATOR, SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';

const SlideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>H</Text>,
      name: 'Home',
      onPress: () => {
        navigation.navigate(HOME_NAVIGATOR);
      },
    },
    {
      icon: <Text>S</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>L</Text>,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <View style={styles.logoImageWrap}>
          <Text>Logo Image</Text>
        </View>

        <View>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity style={styles.item} onPress={onPress} key={name}>
              <View style={styles.icon}>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SlideMenu;

const styles = StyleSheet.create({
  logoImageWrap: {
    height: 150,
    width: 150,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
  },
});
