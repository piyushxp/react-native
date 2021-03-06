import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};

    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};

    case LOGOUT_USER:
      return {...state, loading: false, isLoggedIn: false, data: null};

    case CLEAR_AUTH_STATE:
      return {...state, loading: false, data: null};

    default:
      return state;
  }
};

export default auth;
