import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => {
    //set loading state
    dispatch({type: REGISTER_LOADING});

    //api-call
    axiosInstance
      .post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        //success api --> dispatch data
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
      })
      .catch(err => {
        //failed api --> dispacth error
        console.log('reg-action-fail --> ', err);

        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Someting went wrong'},
        });
      });
  };

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};
