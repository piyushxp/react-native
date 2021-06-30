import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import COLORS from '../../consts/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DetailsScreen = ({navigation, route}) => {
  const house = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
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
    </SafeAreaView>
  );
};

export default DetailsScreen;
