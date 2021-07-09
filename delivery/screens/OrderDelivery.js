import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import React from 'react';
import {COLORS, GOOGLE_API_KEY, icons, SIZES} from '../constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';

const OrderDelivery = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const mapView = React.useRef();

  //states
  const [restaurant, setRestaurant] = React.useState(null);
  const [streetName, setStreetName] = React.useState('');
  const [fromLocation, setFromLocation] = React.useState({});
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    let {restaurant, currentLocation} = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = restaurant.location;
    let street = currentLocation.streetName;
    // console.log(fromLoc);

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant(restaurant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  function calculateAngle(coordinates) {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  const renderMap = () => {
    function destinationMarker() {
      return (
        <Marker coordinate={toLocation}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 100,
              }}>
              <Image
                source={icons.pin}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: COLORS.white,
                }}
              />
            </View>
          </View>
        </Marker>
      );
    }

    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}>
        <Image
          source={icons.car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <MapView
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        apikey={GOOGLE_API_KEY}
        style={{flex: 1}}>
        {/* MapViewDirections from react-native-maps-directions needs billing account,helps with duration and path making -- Check MapViewDirections docs */}
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
        />
        {destinationMarker()}
        {carIcon()}
      </MapView>
    );
  };

  const renderDestinationHeader = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            width: SIZES.width * 0.8,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <Image
            source={icons.red_pin}
            resizeMode="contain"
            style={{height: 20, width: 20, marginRight: SIZES.padding}}
          />
          <View style={{flex: 1}}>
            <Text>{streetName}</Text>
          </View>

          <Text>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  };

  const renderDeliveryInfo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: SIZES.width * 0.9,
            padding: SIZES.padding * 3,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 50, width: 50, borderRadius: 25}}
              source={restaurant?.courier.avatar}
            />
            <View style={{flex: 1, marginLeft: SIZES.padding}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{restaurant.courier.name}</Text>

                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={icons.star}
                    style={{
                      height: 18,
                      width: 18,
                      tintColor: COLORS.primary,
                      marginRight: SIZES.padding,
                    }}
                  />
                  <Text>{restaurant.rating}</Text>
                </View>
              </View>
              {/* Restaurant */}
              <Text style={{color: COLORS.darkgray}}>{restaurant?.name}</Text>
            </View>
          </View>

          {/* Buttons
          
          */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding * 2,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                flex: 1,
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: COLORS.white}}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 50,
                flex: 1,
                backgroundColor: COLORS.secondary,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: COLORS.white}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderMap()}
      {renderDestinationHeader()}
      {renderDeliveryInfo()}
    </View>
  );
};

export default OrderDelivery;

const styles = StyleSheet.create({});
