import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({onSubmit, onChange, form}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <View style={styles.logoText}>
        <Text>Some logo</Text>
      </View>
      <View>
        <Text style={styles.title}>Welcome to Kontacts</Text>
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
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            // error={'This field is required'}
          />

          <Input
            label="Password"
            placeholder="Enter Username"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => setIsSecureEntry(!isSecureEntry)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton primary title="Submit" onPress={onSubmit} />

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
