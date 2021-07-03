import React, {useContext} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log('login submit btn ==>');
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return <LoginComponent onSubmit={onSubmit} onChange={onChange} form={form} />;
};

export default Login;
