import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes/index';
import axiosInstance from '../../helpers/axiosInstance';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });

  //make a api call
  axiosInstance
    .get('/contacts')
    .then(res => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Somehting went Wrong,Try again'},
      });
      console.log(err);
    });
};
