import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import colors from "../config/colors";
import Constants from "expo-constants";
import ErrorMessage from "../Components/ErrorMessage";
import backend from "../Util/backendCalls";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().min(3).label("UserName"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  passwordCheck: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords do not match"
  ),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          passwordCheck: "",
        }}
        onSubmit={(values) => backend.registration(values, "/register")}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCorrect={false}
              icon="email"
              onBlur={() => setFieldTouched("userName")}
              onChangeText={handleChange("userName")}
              placeholder="User Name"
            />

            <ErrorMessage error={errors.userName} visible={touched.userName} />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />

            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("passwordCheck")}
              onChangeText={handleChange("passwordCheck")}
              placeholder="Re-type password"
              secureTextEntry={true}
              textContentType="password"
            />
            <ErrorMessage
              error={errors.passwordCheck}
              visible={touched.passwordCheck}
            />
            <AppButton
              style={styles.button}
              title="Register"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
  errorMsg: {
    color: colors.danger,
  },
  logo: {
    alignSelf: "center",
    width: 110,
    height: 110,
  },
  screen: {
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
});

export default RegisterScreen;
