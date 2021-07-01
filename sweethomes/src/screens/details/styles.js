import {StyleSheet} from 'react-native';
import {SIZES} from '../../consts/theme';
import COLORS from '../../consts/colors';

export default styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
  },

  backgroundImage: {
    height: '100%',
    width: '100%',
  },

  header: {
    paddingVertical: SIZES.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
  },

  headerBtn: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  virtualTag: {
    backgroundColor: COLORS.dark,
    top: -20,
    width: 120,
    paddingHorizontal: SIZES.padding * 2,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 2,
    marginTop: 40,
  },

  ratingTag: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardIcons: {
    marginTop: 10,
    flexDirection: 'row',
  },

  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },

  facilityText: {
    marginLeft: 5,
    color: COLORS.grey,
    fontSize: SIZES.body5,
  },

  interiorImage: {
    width: SIZES.width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 20,
  },
});
