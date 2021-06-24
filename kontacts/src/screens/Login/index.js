import React from 'react';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import LoginComponent from '../../components/Login';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return <LoginComponent />;
};

export default Login;
