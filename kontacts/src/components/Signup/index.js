import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  error,
  loading,
  errors,
}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Kontacts</Text>
        <Text style={styles.subTitle}>Register</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
