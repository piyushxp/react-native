import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from 'react-native';

const CustomSelect = ({
  heading,
  items,
  label,
  onValueChange,
  useNativeAndroidPickerStyle,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        items={[
          {label: 'JavaScript', value: 'JavaScript'},
          {label: 'TypeStript', value: 'TypeStript'},
          {label: 'Python', value: 'Python'},
          {label: 'Java', value: 'Java'},
          {label: 'C++', value: 'C++'},
          {label: 'C', value: 'C'},
        ]}
      />
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
