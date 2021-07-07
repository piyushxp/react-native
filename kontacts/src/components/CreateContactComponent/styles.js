import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  imageView: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },

  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  chooseText: {
    color: colors.primary,
    textAlign: 'center',
  },
});
