import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  disabled,
  secondary,
  primary,
  danger,
  loading,
  onPress,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.gray;
    }
    if (primary) {
      return colors.primary;
    }

    if (secondary) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={colors.primary} />}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
