import React from 'react';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';
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
        iconPosition="right"
      />

      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />

      <CustomButton primary title="Submit" loading={true} disabled={false} />
      <CustomButton
        secondary
        title="Click me"
        loading={true}
        disabled={false}
      />
      <CustomButton danger title="Submit" loading={true} disabled={false} />
      <CustomButton disabled title="Submit" loading={true} disabled={false} />
    </Container>
  );
};

export default Login;
