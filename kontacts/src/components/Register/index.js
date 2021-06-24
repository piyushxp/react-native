import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = () => {
  const [value, onChangeText] = useState('');
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to Kontacts</Text>
        <Text style={styles.subTitle}>Create an Account</Text>

        <View style={styles.form}>
          <Input
            onChangeText={text => onChangeText(text)}
            label="First Name"
            placeholder="Enter First Name"
          />

          <Input
            onChangeText={text => onChangeText(text)}
            label="Last Name"
            placeholder="Enter Last Name"
          />
          <Input
            onChangeText={text => onChangeText(text)}
            label="Username"
            placeholder="Enter Username"
          />

          <Input
            onChangeText={text => onChangeText(text)}
            label="Email"
            placeholder="Enter Email"
          />

          <Input
            onChangeText={text => onChangeText(text)}
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>HIDE</Text>}
            iconPosition="right"
          />
        </View>
      </View>

      <CustomButton primary title="Submit" loading={false} disabled={false} />
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Already have an Account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
