import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import COLORS from '../../consts/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SIZES} from '../../consts/theme';
import houses from '../../consts/houses';

const DetailsScreen = ({navigation, route}) => {
  const house = route.params;

  const InteriorImage = ({image}) => {
    return <Image source={image} style={styles.interiorImage} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <View style={styles.backgroundImageContainer}>
          <ImageBackground style={styles.backgroundImage} source={house.image}>
            <View style={styles.header}>
              <View style={styles.headerBtn}>
                <Icon name="arrow-back-ios" size={15} />
              </View>

              <View style={styles.headerBtn}>
                <Icon name="favorite" size={15} color={COLORS.red} />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.virtualTag}>
            <Text style={{color: COLORS.white}}>Virtual Tour</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: SIZES.body3, fontWeight: 'bold'}}>
              {house.title}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.ratingTag}>
                <Text style={{color: COLORS.white}}>5.0</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>89 Ratings</Text>
            </View>
          </View>

          <Text style={{fontSize: SIZES.body4, color: COLORS.grey}}>
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
              <Text style={styles.facilityText}>300 area</Text>
            </View>
          </View>

          <Text style={{marginTop: 10, color: COLORS.grey}}>
            {house.details}
          </Text>

          <FlatList
            contentContainerStyle={{marginTop: 20}}
            keyExtractor={(_, key) => key.toString()}
            horizontal
            data={house.interiors}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => <InteriorImage image={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
