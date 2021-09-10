import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import AuthContext from "../auth/context";
import backend from "../Util/backendCalls";
import colors from "../config/colors";
import Constants from "expo-constants";
import ErrorMessage from "../Components/ErrorMessage";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (values) => {
    const result = await backend.login(values, "/login");
    if (result.response.status !== 200) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data.token);
    authContext.setUser(user);
  };
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <ErrorMessage
              error={"Invalid email and/or password."}
              visible={loginFailed}
            />
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
            <AppButton
              style={styles.button}
              title="Login"
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

export default LoginScreen;
