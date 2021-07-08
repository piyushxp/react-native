import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';

export default () => dispatch => {
  //remove the token
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');

  //do a dispatch
  dispatch({
    type: LOGOUT_USER,
  });
};
