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

const HomeScreen = () => {
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
          <View style={styles.searchInputContainer}></View>
        </View>
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
});

export default HomeScreen;
