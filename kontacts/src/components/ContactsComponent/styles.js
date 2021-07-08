import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 18,
    marginEnd: 5,
  },

  phoneNumber: {
    fontSize: 14,
    paddingVertical: 5,
    opacity: 0.6,
  },

  floatingActionButton: {
    backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 55,
    height: 55,
    bottom: 45,
    right: 5,
  },
});
