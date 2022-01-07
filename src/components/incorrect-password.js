import React from "react";
import { Modal } from "react-native";
import styled from "styled-components";

import Button from "../components/button";

function IncorrectPassword({ email, onClose }) {
  return (
    <Modal transparent={true} visible={true}>
      <ModalContainer>
        <Content>
          <Title>Incorrect password</Title>
          <Description>
            The password you entered for {email} is incorrect. Please Try again.
          </Description>
          <Button onPress={onClose}>Try Again</Button>
        </Content>
      </ModalContainer>
    </Modal>
  );
}

export default IncorrectPassword;

const ModalContainer = styled.View`
  flex: 1;
  padding: 64px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.View`
  padding: 24px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

const Description = styled.Text`
  margin: 22px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
