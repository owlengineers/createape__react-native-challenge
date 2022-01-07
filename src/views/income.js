import React from "react";
import styled from "styled-components/native";

import Container from "../components/container";

function Income() {
  return (
    <Wrapper>
      <Label>Income</Label>
    </Wrapper>
  );
}

export default Income;

const Wrapper = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;
