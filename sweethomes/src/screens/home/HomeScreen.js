import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';
import images from '../../consts/images';
import {categoryList, optionList} from '../../consts/listData';
import {SIZES} from '../../consts/theme';
import styles from './styles';

const HomeScreen = ({navigation}) => {
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

  const Card = ({house}) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={styles.card}>
          <Image source={house.image} style={styles.cardImage} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{fontSize: SIZES.body4, fontWeight: 'bold'}}>
              {house.title}
            </Text>

            <Text
              style={{
                fontSize: SIZES.body4,
                fontWeight: 'bold',
                color: COLORS.blue,
              }}>
              {'$19000'}
            </Text>
          </View>

          <Text
            style={{color: COLORS.grey, fontSize: SIZES.body5, marginTop: 5}}>
            {house.location}
          </Text>

          <View style={styles.cardIcons}>
            <View style={styles.facility}>
              <Icon name="hotel" size={18}></Icon>
              <Text style={styles.facilityText}>3</Text>
            </View>

            <View style={styles.facility}>
              <Icon name="bathtub" size={18}></Icon>
              <Text style={styles.facilityText}>1</Text>
            </View>

            <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18}></Icon>
              <Text style={styles.facilityText}>300</Text>
            </View>
          </View>
        </View>
      </Pressable>
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
        <FlatList
          contentContainerStyle={{
            paddingLeft: SIZES.padding * 2,
            paddingVertical: SIZES.padding * 2,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
