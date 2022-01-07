import React, { useContext, useState } from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

import { loginCredentials } from "../lib/dummy";
import AuthContext from "../lib/context/logged";
import routeName from "../lib/routes-name";

import Button from "../components/button";
import Wrapper from "../components/container";
import Input from "../components/input";
import Header from "../components/header";
import IncorrectPassword from "../components/incorrect-password";

const YupSchema = yup.object().shape({
  email: yup.string().email("Invalid Email format").required(),
  password: yup.string().min(8).max(256).required(),
});

function Login({ theme }) {
  const [incorrectAuth, setIncorrectAuth] = useState(false);

  const navigation = useNavigation();

  const { setLogged } = useContext(AuthContext);

  function handleInformation(values) {
    if (
      values.email === loginCredentials.email &&
      values.password === loginCredentials.password
    ) {
      setLogged(true);
    } else {
      setIncorrectAuth(true);
    }
  }

  return (
    <Wrapper>
      <Header />

      <Formik
        enableReinitialize
        initialValues={{ email: "", password: "" }}
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
          <>
            <Container>
              <View>
                <Title>Log In</Title>

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
                </View>
              </View>

              <View style={{ marginBottom: 32 }}>
                <Button
                  disabled={values.email === "" || values.password === ""}
                  style={{ marginBottom: 24 }}
                  onPress={handleSubmit}>
                  Sign in
                </Button>

                <LabelContainer
                  onPress={() => navigation.navigate(routeName.register)}>
                  <Label>Not a member?</Label>
                  <Label style={{ fontWeight: "600" }}>Join the club</Label>
                </LabelContainer>
              </View>
            </Container>

            {incorrectAuth && (
              <IncorrectPassword
                email={values.email}
                onClose={() => setIncorrectAuth(false)}
              />
            )}
          </>
        )}
      </Formik>
    </Wrapper>
  );
}

export default withTheme(Login);

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
