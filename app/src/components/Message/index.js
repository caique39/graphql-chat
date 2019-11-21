import React from "react";
import { Container, MessageText, Content, SenderName } from "./atoms";

function Message(props) {
  const { text, sender, ownMessage, color } = props;

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
