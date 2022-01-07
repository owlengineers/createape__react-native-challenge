import React from "react";
import { View } from "react-native";
import styled, { withTheme } from "styled-components/native";

function Input({ theme, touched, error, ...props }) {
  return (
    <View style={props.wrapperStyle}>
      <Label style={props.labelStyle}>{props.label}</Label>
      <InputComponent placeholderTextColor={theme.colors.white} {...props} />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
}

const Label = styled.Text`
  margin-bottom: 16px;
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;

const InputComponent = styled.TextInput`
  padding-bottom: 12px;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  border-bottom-color: ${props => props.theme.colors.white};
  border-bottom-width: 1px;
`;

const ErrorMessage = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: ${props => props.theme.colors.danger};
`;

export default withTheme(Input);
