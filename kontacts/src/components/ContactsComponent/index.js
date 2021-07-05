import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal/index';
import CustomButton from '../common/CustomButton/index';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        setModalVisible={setModalVisible}
        title="My Profile"
        modalVisible={modalVisible}
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello from the other side</Text>
          </View>
        }
      />
      <CustomButton
        onPress={() => setModalVisible(true)}
        title="Open Modal"
        secondary
      />
    </View>
  );
};

export default ContactsComponent;
