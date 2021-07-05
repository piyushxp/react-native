import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

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
      <Text>Hi from contacts</Text>
    </Container>
  );
};

export default Contacts;
