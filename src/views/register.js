import React, { useContext } from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

import AuthContext from "../lib/context/logged";
import routeName from "../lib/routes-name";

import Button from "../components/button";
import Wrapper from "../components/container";
import Input from "../components/input";
import Header from "../components/header";

const YupSchema = yup.object().shape({
  email: yup.string().email("Invalid Email format").required(),
  password: yup.string().min(8).max(256).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Register({ theme }) {
  const navigation = useNavigation();

  const { setLogged } = useContext(AuthContext);

  function handleInformation() {
    setLogged(true);
  }

  return (
    <Wrapper>
      <Header />

      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={handleInformation}
        validationSchema={YupSchema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <Container>
            <View>
              <Title>Register</Title>

              <View style={{ marginTop: 56 }}>
                <Input
                  autoCapitalize="none"
                  label="Email"
                  error={errors.email}
                  touched={touched.email}
                  onBlur={() => setFieldTouched("email")}
                  placeholder="Type your email"
                  placeholderTextColor={theme.colors.gray}
                  value={values.email}
                  onChangeText={handleChange("email")}
                />

                <Input
                  secureTextEntry
                  label="Password"
                  error={errors.password}
                  touched={touched.password}
                  onBlur={() => setFieldTouched("password")}
                  placeholder="Type your password"
                  placeholderTextColor={theme.colors.gray}
                  value={values.password}
                  wrapperStyle={{ marginTop: 68 }}
                  onChangeText={handleChange("password")}
                />

                <Input
                  secureTextEntry
                  label="Confirm Password"
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  onBlur={() => setFieldTouched("confirmPassword")}
                  placeholder="Confirm password"
                  placeholderTextColor={theme.colors.gray}
                  value={values.confirmPassword}
                  wrapperStyle={{ marginTop: 68 }}
                  onChangeText={handleChange("confirmPassword")}
                />
              </View>
            </View>

            <View style={{ marginBottom: 32 }}>
              <Button
                disabled={
                  values.email === "" ||
                  values.password === "" ||
                  values.confirmPassword === ""
                }
                style={{ marginBottom: 24 }}
                onPress={handleSubmit}>
                Register
              </Button>

              <LabelContainer
                onPress={() => navigation.navigate(routeName.login)}>
                <Label>Already a member?</Label>
                <Label style={{ fontWeight: "600" }}>Sign in</Label>
              </LabelContainer>
            </View>
          </Container>
        )}
      </Formik>
    </Wrapper>
  );
}

export default withTheme(Register);

const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 48px;
`;

const LabelContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
