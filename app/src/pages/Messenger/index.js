import React, { useState, useRef } from "react";
import styled from "styled-components";
import ChatArea from "../../components/ChatArea";
import Navbar from "../../components/Navbar";
import { useMutation } from "@apollo/react-hooks";
import { useMessages } from "../../hooks";
import gql from "graphql-tag";

const Container = styled.div`
  height: ${window.innerHeight}px;
  display: flex;
  flex-direction: column;
`;

const WritingBox = styled.form`
  display: flex;
  padding: 8px 16px;
`;

const Input = styled.input`
  flex: 1;
  font-size: 16px;
  outline: none;
  background-color: #eee;
  border-radius: 8px;
  border: none;
  padding-left: 12px;
`;

const TextButton = styled.button`
  padding: 12px;
  background-color: #eee;
  border: none;
  color: #212121;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 8px;
`;

const mutationSendMessage = gql`
  mutation sendMessage($sender: String!, $text: String!) {
    sendMessage(sender: $sender, text: $text) {
      date
      sender
      text
    }
  }
`;

export default function Messenger({ user }) {
  const { name, avatar, phone } = user;

  const [sendMessage] = useMutation(mutationSendMessage);

  const [newMessage, setNewMessage] = useState("");
  const { messages } = useMessages();

  const inputRef = useRef(null);

  const createMessage = text => {
    inputFocus();
    sendMessage({ variables: { sender: name, text } });
    setNewMessage("");
  };

  const inputFocus = () => inputRef.current.focus();

  return (
    <Container>
      <Navbar username={name} phone={phone} avatar={avatar}></Navbar>
      <ChatArea messages={messages} username={name}></ChatArea>
      <WritingBox
        onSubmit={e => {
          e.preventDefault();
          createMessage(newMessage);
        }}
      >
        <Input
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)}
          placeholder="Mensagem"
          ref={inputRef}
        />
        <TextButton>Enviar</TextButton>
      </WritingBox>
    </Container>
  );
}
