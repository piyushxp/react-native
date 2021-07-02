import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({password, userName: username}) =>
  dispatch => {
    //start
    dispatch({
      type: LOGIN_START,
    });

    //call login api
    axiosInstance
      .post('auth/login', {username, password})
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        }),
      )
      .catch(err => {
        console.log(err);
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };
