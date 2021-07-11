import React from 'react';
import {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {icons} from '../constants';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {categoriesData} from '../data/data';

const Home = () => {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115),
  ).current;
  const [categories, setCategories] = React.useState(categoriesData);
  const [viewMode, setViewMode] = React.useState('chart');
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [showMoreToggle, setShowMoreToggle] = React.useState(false);

  const renderNavBar = () => (
    <View style={styles.navbarContainer}>
      <TouchableOpacity>
        <Image source={icons.back_arrow} style={styles.iconImage} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={icons.more} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>My Expenses</Text>
        <Text style={styles.headerSubs}>Summary(private)</Text>
      </View>

      <View style={styles.dateCalenderContainer}>
        <View style={styles.calenderContainer}>
          <Image source={icons.calendar} style={styles.iconImage}></Image>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>11th July,2021</Text>
          <Text style={styles.dateSubtext}>20% more than last Month</Text>
        </View>
      </View>
    </View>
  );

  const renderCategoryHeaderSection = () => (
    <View style={styles.categoryContainer}>
      <View>
        <Text style={styles.dateText}>CATEGORIES</Text>
        <Text style={styles.dateSubtext}>8 Total</Text>
      </View>

      <View style={styles.categoryIconContainer}>
        <TouchableOpacity
          onPress={() => setViewMode('chart')}
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
            borderRadius: 25,
          }}>
          <Image
            source={icons.chart}
            style={{
              height: 15,
              width: 15,
              tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setViewMode('list')}
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
            borderRadius: 25,
          }}>
          <Image
            source={icons.chart}
            style={{
              height: 15,
              width: 15,
              tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCategoryList = () => {
    const renderItem = ({item}) => (
      <TouchableOpacity
        onPress={() => setSelectedCategory(item)}
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color,
          }}
        />
        <Text
          style={{marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );

    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding / 2,
        }}>
        <Animated.View style={{height: categoryListHeightAnimationValue}}>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
          />
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (showMoreToggle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 115,
                duration: 300,
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 172.5,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
            setShowMoreToggle(!showMoreToggle);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: SIZES.base,
          }}>
          <Text style={{...FONTS.body4}}>
            {showMoreToggle ? 'LESS' : ' MORE'}
          </Text>
          <Image
            source={icons.down_arrow}
            style={{
              marginLeft: 5,
              width: 15,
              height: 15,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderIncomingExpenses = () => {
    let allExpenses = selectedCategory ? selectedCategory.expenses : [];

    //filter according to Pending "P" or "C" confirm
    let incomingExpenses = allExpenses.filter(a => a.status == 'P');

    const renderIncomingExpenseTitle = () => (
      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
        }}>
        <Text style={{...FONTS.h3, color: COLORS.primary}}>
          INCOMING EXPENSES
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
      </View>
    );

    const renderItem = ({item, index}) => (
      <View
        style={{
          width: 300,
          marginRight: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginVertical: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        {/* Title */}
        <View
          style={{
            flexDirection: 'row',
            padding: SIZES.padding,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              backgroundColor: COLORS.lightGray,
              alignItems: 'center',
              justifyContent: 'center',
              margin: SIZES.base,
            }}>
            <Image
              source={selectedCategory.icon}
              style={{height: 20, width: 20, tintColor: selectedCategory.color}}
            />
          </View>

          <Text style={{...FONTS.h3b, color: selectedCategory.color}}>
            {selectedCategory.name}
          </Text>
        </View>

        {/* Expenses Description */}
        <View style={{paddingHorizontal: SIZES.padding}}>
          {/* TITLE AND DESCRIPTION */}
          <Text style={{...FONTS.h2b}}>{item.title}</Text>
          <Text style={{...FONTS.body3}}>{item.description}</Text>
          {/* LOCATION */}
          <View>
            <Text style={{marginTop: SIZES.padding, ...FONTS.h4}}>
              LOCATION
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={icons.pin}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkgray,
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  marginBottom: SIZES.base,
                  color: COLORS.darkgray,
                  ...FONTS.body4,
                }}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
        {/* PRICE */}
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selectedCategory.color,
            borderBottomStartRadius: SIZES.radius,
            borderBottomEndRadius: SIZES.radius,
          }}>
          <Text style={{color: COLORS.white}}>
            CONFIRM {item.total.toFixed(2)} USD
          </Text>
        </View>
      </View>
    );
    return (
      <View>
        {renderIncomingExpenseTitle()}

        {incomingExpenses.length > 0 && (
          <FlatList
            data={incomingExpenses}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {incomingExpenses.length == 0 && (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 300,
            }}>
            <Text>No Record</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      {/* NavbarSection */}
      {renderNavBar()}
      {renderHeader()}
      {renderCategoryHeaderSection()}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 30,
        }}>
        {viewMode == 'list' ? (
          <View>
            {renderCategoryList()}
            {renderIncomingExpenses()}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  navbarContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },

  iconImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.primary,
  },

  iconImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 50,
  },

  headerContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
    backgroundColor: COLORS.white,
  },

  headerText: {
    color: COLORS.primary,
    ...FONTS.h2b,
  },

  headerSubs: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },

  dateCalenderContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },

  calenderContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateContainer: {
    marginLeft: SIZES.padding,
  },

  dateText: {
    ...FONTS.h3b,
    color: COLORS.primary,
  },
  dateSubText: {
    ...FONTS.body3,
    color: COLORS.darkgray,
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: SIZES.padding,
  },

  categoryIconContainer: {
    flexDirection: 'row',
  },
});
