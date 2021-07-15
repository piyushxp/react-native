import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {COLORS} from '../../assets/theme';

const CustomButton = ({title, onPress, isSubmitting}) => {
  const backgroundColor = isSubmitting ? COLORS.secondary : COLORS.primary;
  return (
    <View style={{marginTop: 10}}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: backgroundColor,
            height: 45,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={!isSubmitting ? onPress : null}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: COLORS.white, marginRight: 5}}>{title}</Text>
            {isSubmitting && <ActivityIndicator color="#e0e0e2" size="small" />}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomButton;
