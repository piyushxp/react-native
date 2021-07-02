import {useNavigation} from '@react-navigation/native';
import React from 'react';
import LoginComponent from '../../components/Login';
const Login = () => {
  const [form, setForm] = React.useState({});

  const {navigate} = useNavigation();

  const onSubmit = () => {
    if (form.username && form.password) {
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return <LoginComponent onSubmit={onSubmit} onChange={onChange} form={form} />;
};

export default Login;
