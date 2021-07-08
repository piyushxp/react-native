import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Home = () => {
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h3}}>Hyderabad,India</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return <SafeAreaView>{renderHeader()}</SafeAreaView>;
};

export default Home;
