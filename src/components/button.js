import React from "react";
import styled, { withTheme } from "styled-components/native";

function Button({ theme, ...props }) {
  return (
    <Wrapper color={theme.colors.primary} {...props}>
      <Label style={props.labelStyle}>{props.children}</Label>
    </Wrapper>
  );
}

export default withTheme(Button);

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 6px;
  background-color: ${props =>
    props.kind === "outline" ? "transparent" : props.color};
  border: ${props =>
    props.kind === "outline" ? "1px solid #fff" : `1px solid ${props.color}`};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;
