import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({
    email,
    password,
    username,
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
        dispatch({
          type: REGISTER_SUCCESS,
          payload: err.response ? err.response.data : {error: 'Someting'},
        });
        console.log('reg-action --> ', err);
      });
  };
