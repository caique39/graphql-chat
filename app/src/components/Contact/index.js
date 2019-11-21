import React from "react";
import { Container, Name, LastMessage, Avatar } from "./atoms";

function Contact(props) {
  const { name, lastMessage } = props;

  return (
    <Container>
      <Avatar />
      <div>
        <Name>{name}</Name>
        <LastMessage>{lastMessage}</LastMessage>
      </div>
    </Container>
  );
}

export default Contact;
