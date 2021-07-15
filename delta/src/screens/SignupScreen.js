import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import {delta} from '../assets/images/images';
import {FONTS} from '../assets/theme';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomInput from '../components/common/CustomInput/CustomInput';
import CustomButton from '../components/common/CustomButton/CustomButton';

const SignupScreen = () => {
  const userInfo = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string().email('Email Invalid').required('Email is required'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is Short')
      .required('Password is Required'),
    // confirmPassword:Yup.string().equals([Yup.ref('password'),null],'Password done')
  });

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={delta} style={{width: 100, height: 100}} />
          <Text style={styles.text}>Register Here</Text>
        </View>
        <View>
          <Formik
            validator={() => ({})}
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={(values, formikActions) => {
              // console.log('ssasasasa');
              // console.log(values);
              console.log(formikActions);
              setTimeout(() => {
                formikActions.resetForm();
                formikActions.setSubmitting(false);
              }, 3000);
            }}>
            {({
              values: {email, password, fullname},
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <>
                  <CustomInput
                    label="Fullname"
                    value={fullname}
                    mode="outlined"
                    onBlur={handleBlur('fullname')}
                    onChangeText={handleChange('fullname')}
                    name="fullname"
                    error={errors}
                  />

                  <CustomInput
                    label="Email"
                    value={email}
                    mode="outlined"
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    name="email"
                    error={errors}
                  />

                  <CustomInput
                    label="Password"
                    value={password}
                    mode="outlined"
                    onBlur={handleBlur('password')}
                    error={touched.email && errors.email}
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    name="password"
                    error={errors}
                  />
                  <CustomButton
                    title="Submit"
                    onPress={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    padding: 10,
  },

  text: {
    ...FONTS.body2,
  },
});
