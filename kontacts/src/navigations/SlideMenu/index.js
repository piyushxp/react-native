import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import {HOME_NAVIGATOR, SETTINGS} from '../../constants/routeNames';

const SlideMenu = ({navigation}) => {
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
      onPress: () => {
        console.log('logout');
      },
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <View style={styles.logoImageWrap}>
          <Text>Some Logo Image</Text>
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
