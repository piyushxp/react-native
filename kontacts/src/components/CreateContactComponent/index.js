import React from "react";
import {StyleSheet, Text, Image, View} from "react-native";
import Container from "../common/Container/index";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input/index";
import CountryPicker from "react-native-country-picker-modal";
import {DEFAULT_IMAGE_URL} from "../../constants/actionTypes/general";
import styles from "./styles";

const CreateContactComponent = ({
  onChangeText,
  loading,
  error,
  onSubmit,
  setForm,
  form,
}) => {
  console.log(error);
  return (
    <View>
      <Container>
        <View style={styles.ImageContainer}>
          <Image source={{uri: DEFAULT_IMAGE_URL}} style={styles.imageView} />
        </View>
        <Text style={styles.chooseText}>Choose Image</Text>
        <Input
          label="First Name"
          onChangeText={value => onChangeText({name: "firstName", value})}
          placeholder="Enter First Name"
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          onChangeText={value => onChangeText({name: "lastName", value})}
          placeholder="Enter Last Name"
          error={error?.last_name?.[0]}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({...form, countryCode: cCode, phoneCode: phoneCode});
              }}
            />
          }
          onChangeText={value => onChangeText({name: "phoneNumber", value})}
          iconPosition="left"
          style={{paddingLeft: 10}}
          label="Phone Number"
          placeholder="Enter Phone Number"
          error={error?.phone_number?.[0]}
        />

        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
