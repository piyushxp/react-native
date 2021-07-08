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
import {categoryData, initialCurrentLocation, restaurantData} from '../data';

const Home = () => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

  function onSelectCategory(category) {
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );

    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  function getCategoryNameById(categoryId) {
    let category = categories.filter(a => a.id == categoryId);
    if (category.length > 0) {
      return category[0].name;
    }

    return '';
  }

  const renderMainCategories = () => {
    function renderItem({item}) {
      return (
        <TouchableOpacity
          onPress={() => onSelectCategory(item)}
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.padding,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: COLORS.white,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              ...FONTS.body5,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>
        <FlatList
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  };

  const renderHeader = () => {
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
  };

  const renderRestaurantList = () => {
    function renderItem({item}) {
      return (
        <TouchableOpacity
          style={{
            marginBottom: SIZES.padding * 2,
            // onPress
          }}>
          <View style={{marginBottom: SIZES.padding}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
            />

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          <View>
            <Text>{item.name}</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />

            <Text style={{...FONTS.body3}}>{item.rating}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              {item.categories.map(categoryId => {
                return (
                  <View key={categoryId} style={{flexDirection: 'row'}}>
                    <Text style={{...FONTS.body3, marginRight: 5}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                  </View>
                );
              })}
              {[1, 2, 3].map(priceRating => (
                <Text
                  key={priceRating}
                  style={{
                    ...FONTS.body3,
                    color:
                      priceRating <= item.priceRating
                        ? COLORS.black
                        : COLORS.darkgray,
                  }}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

export default Home;
