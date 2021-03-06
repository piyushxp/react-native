import {
  NavigationHelpersContext,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Image,
  Text,
  View,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const Restaurant = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    let {item, currentLocation} = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, []);

  const renderHeader = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            padingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray3,
          }}>
          <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFoodInfo = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        // onScroll
      >
        {restaurant?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{height: SIZES.height * 0.35}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: SIZES.width,
                height: '100%',
              }}
            />
          </View>
        ))}
      </Animated.ScrollView>
    );
  };

  const renderOrder = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={{
            width: SIZES.width * 0.9,
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            borderRadius: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate('OrderDelivery', {
              restaurant: restaurant,
              currentLocation: currentLocation,
            })
          }>
          <Text style={{color: COLORS.white}}> Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});
