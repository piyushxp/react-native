import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 160,
    width: 160,
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 5,
  },

  createSection: {
    flexDirection: 'row',
  },

  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
