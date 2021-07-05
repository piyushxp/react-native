import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useState} from 'react';
import ContactsComponent from '../../components/ContactsComponent';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Text>NAV</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <Container>
      <ContactsComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {/* <Text>hellooooooo</Text> */}
    </Container>
  );
};

export default Contacts;
