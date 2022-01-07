import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import routeName from "../lib/routes-name";

import WelcomeWrapper from "../template/welcome";

import Button from "../components/button";

function Welcome() {
  const navigation = useNavigation();

  return (
    <WelcomeWrapper>
      <Title>
        Gain access to a large, highly influential network of entrepreneurs
      </Title>

      <Button
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate(routeName.register)}>
        Apply Now!
      </Button>

      <Button
        kind="outline"
        onPress={() => navigation.navigate(routeName.login)}>
        Log in
      </Button>
    </WelcomeWrapper>
  );
}

export default Welcome;

const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;
