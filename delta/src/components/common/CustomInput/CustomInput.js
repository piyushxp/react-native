import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLORS, SIZES} from '../../../assets/theme';

const CustomInput = ({
  error,
  label,
  value,
  mode,
  onChangeText,
  name,
  placeholder,
  ...props
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        label={label}
        value={value}
        mode={mode}
        onChangeText={onChangeText}
        {...props}
      />

      {error && (
        <View>
          {/* <Text>{JSON.stringify(value)}</Text> */}
          <Text
            style={{color: COLORS.red, paddingHorizontal: SIZES.padding / 2}}>
            {error[name]}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
