import React, { useState } from "react";
import { Container, ChatArea, WritingBox, Input, TextButton } from "./atoms";
import Message from "../../components/Message";
import Navbar from "../../components/Navbar";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { useMessages } from "../../hooks";

const mutationSendMessage = gql`
  mutation sendMessage($sender: String!, $text: String!) {
    sendMessage(sender: $sender, text: $text) {
      date
    }
  }
`;

function Messenger({ user }) {
  const { avatar, name } = user || {};

  const [currentMessage, setCurrentMessage] = useState("");
  const [sendMessage] = useMutation(mutationSendMessage);

  const messages = useMessages();

  const createMessage = () =>
    sendMessage({ variables: { sender: user.name, text: currentMessage } });

  const handleChangeMessage = event => setCurrentMessage(event.target.value);

  return (
    <Container>
      <Navbar avatar={avatar} username={name} />

      <ChatArea>
        {messages.map(({ sender, text }) => (
          <Message sender={sender} text={text} ownMessage={sender === name} />
        ))}
      </ChatArea>

      <WritingBox>
        <Input
          value={currentMessage}
          onChange={handleChangeMessage}
          autoFocus
          placeholder="Mensagem"
          type="text"
        ></Input>
        <TextButton onClick={() => createMessage()}>Enviar</TextButton>
      </WritingBox>
    </Container>
  );
}

export default Messenger;
