import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Image, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.logoText}>
        <Text>Some logo</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <Message
          message="Errorororororor"
          retry
          retryFn={() => console.log('Hello There')}
          danger
          onDismiss={() => console.log('Removed')}
        />

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Enter Username"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />

          <CustomButton primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
