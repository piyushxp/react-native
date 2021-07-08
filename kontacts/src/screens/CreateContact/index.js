import React, {useContext, useState} from "react";

import {Text, View} from "react-native";
import CreateContactComponent from "../../components/CreateContactComponent/index";
import createContacts from "../../context/actions/createContacts";
import {GlobalContext} from "../../context/Provider";
import {CONTACT_LIST} from "../../constants/routeNames";
import {useNavigation} from "@react-navigation/native";

const CreateContact = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const {
    contactsDispatch,
    contactsState: {
      createContacts: {error, loading},
    },
  } = useContext(GlobalContext);

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContacts(form)(contactsDispatch)(navigate(CONTACT_LIST));
  };

  console.log(error);

  return (
    <View>
      <CreateContactComponent
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        onChangeText={onChangeText}
        loading={loading}
        error={error}
      />
    </View>
  );
};

export default CreateContact;
