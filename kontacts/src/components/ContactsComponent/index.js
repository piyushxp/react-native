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

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const ListEmptyComponent = () => (
    <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
      <Message info message="No Contacts to Show" />
    </View>
  );

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, phone_number} = item;

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
                backgroundColor: colors.grey,
              }}></View>
          )}

          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <Text>{first_name}</Text>

            <Text>{last_name}</Text>
          </View>

          <Text>{phone_number}</Text>
        </View>
        <Icon type="right"></Icon>
      </TouchableOpacity>
    );
  };

  return (
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
            keyExtractor={item => String(item.id)}
            renderItem={renderItem}
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
