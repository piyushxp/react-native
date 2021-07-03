import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({password, userName: username}) =>
  dispatch => {
    //start
    dispatch({
      type: LOGIN_START,
    });

    //call login api
    axiosInstance
      .post('auth/login', {username, password})
      .then(res => {
        console.log(res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log({err});
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong ,Try again'},
        });
      });
  };
