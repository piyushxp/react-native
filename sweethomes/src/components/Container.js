import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {SIZES} from '../consts/theme';

export const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: SIZES.padding,
  },
});
