import React, { useState } from "react";
import { Container, ChatArea, WritingBox, Input, TextButton } from "./atoms";
import Message from "../../components/Message";
import Navbar from "../../components/Navbar";

function Messenger() {
  const username = "Gumy Bear";

  const [currentMessage, setCurrentMessage] = useState("");

  const [messages, setMessages] = useState([
    { text: "Olá, bro", sender: "Gumy Bear", color: "red" },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      sender: "Gumy Bear2",
      color: "blue"
    },

    { text: "Olá, bro", sender: "Gumy Bear3", color: "orange" }
  ]);

  const sendMessage = message => {
    setMessages([
      ...messages,
      { text: message, sender: "Gumy Bear", ownMessage: true, color: "red" }
    ]);

    setCurrentMessage("");
  };

  const handleChangeMessage = event => setCurrentMessage(event.target.value);

  return (
    <Container>
      <Navbar />

      <ChatArea>{messages.map(Message)}</ChatArea>

      <WritingBox>
        <Input
          value={currentMessage}
          onChange={handleChangeMessage}
          autoFocus
          placeholder="Mensagem"
          type="text"
        ></Input>
        <TextButton onClick={() => sendMessage(currentMessage)}>
          Enviar
        </TextButton>
      </WritingBox>
    </Container>
  );
}

export default Messenger;
