import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal/index';
import CustomButton from '../common/CustomButton/index';
import Message from '../common/Message';
import Icon from 'react-native-vector-icons/AntDesign';
import {CREATE_CONTACT} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const {navigate} = useNavigation();
  const ListEmptyComponent = () => (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No Contacts to Show" />
    </View>
  );

  const renderItem = ({item}) => {
    const {contact_picture, first_name, country_code, last_name, phone_number} =
      item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.grey,
                borderRadius: 100,
              }}>
              <Text>{first_name[0]}</Text>

              <Text>{last_name[0]}</Text>
            </View>
          )}

          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon type="right"></Icon>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View>
        {/* <AppModal
        setModalVisible={setModalVisible}
        title="My Profile"
        modalVisible={modalVisible}
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello from the other side</Text>
          </View>
        }
      /> */}

        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}

        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
              keyExtractor={item => String(item.id)}
              renderItem={renderItem}
              data={data}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Text style={{color: colors.white, fontSize: 22}}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
