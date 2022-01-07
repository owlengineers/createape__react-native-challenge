import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

import Container from "../components/container";

const colors = [
  "rgba(0, 13, 22, 0.95)",
  "rgba(0, 13, 22, 0.37)",
  "rgba(0, 13, 22, 0)",
  "rgba(0, 13, 22, 0.51)",
  "rgba(0, 13, 22, 0.91)",
  "rgba(0, 13, 22, 1)",
];

function WelcomeWrapper({ children }) {
  return (
    <ImageBackground
      source={require("../assets/images/welcome-background.png")}
      style={{ flex: 1 }}>
      <LinearGradient
        colors={colors}
        start={{ x: 1.5, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, bottom: 0, left: 0, right: 0 }}>
        <Wrapper>{children}</Wrapper>
      </LinearGradient>
    </ImageBackground>
  );
}

export default WelcomeWrapper;

const Wrapper = styled(Container)`
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
`;
