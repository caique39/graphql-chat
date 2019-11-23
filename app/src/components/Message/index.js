import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: #212121;
`;

const Sender = styled.span`
  font-size: 12px;
  color: red;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  padding: 4px 6px;
  background-color: #fff;
  border-radius: 8px;
  margin: 4px 0;
`;

export default function Message({ text, sender, ownMessage }) {
  return (
    <Container style={ownMessage ? { justifyContent: "flex-end" } : {}}>
      <Content>
        <Sender>{sender}</Sender>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
}
