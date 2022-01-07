import React from "react";
import styled from "styled-components/native";

import Container from "../components/container";

function Adventures() {
  return (
    <Wrapper>
      <Label>Adventures</Label>
    </Wrapper>
  );
}

export default Adventures;

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;
