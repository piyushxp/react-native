import {StyleSheet} from 'react-native';
import COLORS from '../../consts/colors';
import {SIZES} from '../../consts/theme';

export default styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  searchInputContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  searchBtn: {
    backgroundColor: COLORS.dark,
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: SIZES.padding * 2,
  },

  optionCard: {
    height: 210,
    width: SIZES.width / 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },

  optionCardImage: {
    borderRadius: 10,
    height: 140,
    width: '100%',
  },

  optionCardTitle: {
    marginTop: 5,
    fontSize: SIZES.body3,
    fontWeight: 'bold',
  },

  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },

  categoryListText: {
    fontSize: SIZES.body4,
    fontWeight: 'bold',
    paddingBottom: SIZES.padding / 2,
    color: COLORS.grey,
  },

  activeCategoryListStyle: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },

  card: {
    height: 250,
    width: SIZES.width - 40,
    backgroundColor: COLORS.white,
    elevation: 10,
    padding: SIZES.padding,
    marginRight: 20,
    borderRadius: 20,
  },

  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
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
});
