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
      <Title>Welcome</Title>
      <Description>
        Obtain unfiltered insight on how others like you excel at life and
        business on a daily basis.
      </Description>

      <Button onPress={() => navigation.navigate(routeName.login_signup)}>
        Get Started!
      </Button>
    </WelcomeWrapper>
  );
}

export default Welcome;

const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.Text`
  margin: 20px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 26px;
`;
