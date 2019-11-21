import React from "react";
import { Container, MessageText, Content, SenderName } from "./atoms";

function Message({ text, sender, ownMessage, color }) {
  return (
    <Container style={ownMessage ? { justifyContent: "flex-end" } : {}}>
      <Content>
        <SenderName style={{ color }}>{sender}</SenderName>
        <MessageText>{text}</MessageText>
      </Content>
    </Container>
  );
}

export default Message;
