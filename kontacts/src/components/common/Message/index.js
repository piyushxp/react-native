import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  primary,
  retry,
  retryFn,
  danger,
  info,
  onDismiss,
  success,
}) => {
  const [dismissed, setDismissed] = React.useState(false);

  const getBgColor = () => {
    if (danger) {
      return colors.danger;
    }
    if (primary) {
      return colors.primary;
    }
    if (success) {
      return colors.success;
    }

    if (info) {
      return colors.secondary;
    }
  };
  return (
    <>
      {!dismissed ? (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>

            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text style={{color: colors.white}}>try</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default Message;
