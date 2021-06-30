import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import COLORS from '../consts/colors';
import images from '../consts/images';
import {FONTS, SIZES} from '../consts/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {categoryList, optionList} from '../consts/listData';

const HomeScreen = () => {
  const ListCategories = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(1);

    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable key={index} onPress={() => setActiveCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryListText,
                index == activeCategoryIndex && styles.activeCategoryListStyle,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={styles.optionListContainer}>
        {optionList.map((item, index) => (
          <View key={index} style={styles.optionCard}>
            <Image source={item.img} style={styles.optionCardImage} />
            <Text style={styles.optionCardTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <View>
          <Text style={{color: COLORS.grey}}>Location</Text>
          <Text
            style={{
              color: COLORS.dark,
              fontSize: SIZES.body2,
              fontWeight: 'bold',
            }}>
            India
          </Text>
        </View>

        <Image source={images.person} style={styles.profileImage} />
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding * 2,
          }}>
          <View style={styles.searchInputContainer}>
            <Icon name="search" size={25} color={COLORS.grey} />
            <TextInput placeholder="Search address,City,Pincode" />
          </View>
          <View style={styles.searchBtn}>
            <Icon name="tune" color={COLORS.white} size={20} />
          </View>
        </View>

        <ListOptions />
        <ListCategories />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  searchInputContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  searchBtn: {
    backgroundColor: COLORS.dark,
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: SIZES.padding * 2,
  },

  optionCard: {
    height: 210,
    width: SIZES.width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },

  optionCardImage: {
    borderRadius: 10,
    height: 140,
    width: '100%',
  },

  optionCardTitle: {
    marginTop: 5,
    fontSize: SIZES.body3,
    fontWeight: 'bold',
  },

  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },

  categoryListText: {
    fontSize: SIZES.body4,
    fontWeight: 'bold',
    paddingBottom: SIZES.padding / 2,
    color: COLORS.grey,
  },

  activeCategoryListStyle: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});

export default HomeScreen;
