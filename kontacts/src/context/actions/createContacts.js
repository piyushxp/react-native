import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from "../../constants/actionTypes/index";
import axiosInstance from "../../helpers/axiosInstance";

export default form => dispatch => {
  console.log("form:>>", form);
  let requestPayload = {
    country_code: form.countryCode,
    first_name: form.firstName,
    last_name: form.lastName,
    phone_number: form.phoneNumber,
    contact_picture: "https://i.pinimg.com/originals/4e/4a/b9/asasassas.jpg",
    is_favorite: true,
  };

  //loading
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });

  //make a api call
  axiosInstance
    .post("/contacts/", requestPayload)
    .then(res => {
      console.log(res.data);

      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log("Err :>>", err);
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: "Somehting went Wrong,Try again"},
      });
    });
};
