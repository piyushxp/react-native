import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        label="Username"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
