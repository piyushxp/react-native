import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Pressable,
} from 'react-native';
import COLORS from '../../consts/colors';
import images from '../../consts/images';
import {SIZES} from '../../consts/theme';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image style={style.image} source={images.onBoardImage} />

      <View style={style.indicatorContainer}>
        <View style={style.indicator}></View>
        <View style={style.indicator}></View>
        <View style={[style.indicator, style.indicatorActive]}></View>
      </View>

      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <View>
          <Text style={style.title}>Find your</Text>
          <Text style={style.title}>Sweet Home</Text>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={style.subTitle}>
            Connect with chilled out Landlords{' '}
          </Text>
          <Text style={style.subTitle}>Be an awesome Tenant </Text>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 40}}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text style={{color: COLORS.white}}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },

  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicator: {
    height: 3,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    borderRadius: 5,
    width: 10,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },

  title: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: SIZES.body3,
    color: COLORS.grey,
  },

  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnBoardScreen;
