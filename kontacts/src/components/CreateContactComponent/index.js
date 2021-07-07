import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Container from '../common/Container/index';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input/index';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URL} from '../../constants/actionTypes/general';
import styles from './styles';

const CreateContactComponent = () => {
  return (
    <View>
      <Container>
        <View style={styles.ImageContainer}>
          <Image source={{uri: DEFAULT_IMAGE_URL}} style={styles.imageView} />
        </View>
        <Text style={styles.chooseText}>Choose Image</Text>
        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {}}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
          label="Phone Number"
          placeholder="Enter Phone Number"
        />

        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
