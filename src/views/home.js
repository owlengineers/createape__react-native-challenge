import React, { useContext } from "react";
import styled from "styled-components/native";

import AuthContext from "../lib/context/logged";

import Container from "../components/container";

function Home() {
  const { setLogged } = useContext(AuthContext);

  return (
    <Wrapper>
      <Logout onPress={() => setLogged(false)}>Logout</Logout>
      <Label>Home</Label>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;

const Logout = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 120px;
  right: 24px;
`;
