import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Message from "../Message";

const Container = styled.div`
  background-image: url(https://wallpapercave.com/wp/wp3998720.jpg);
  background-size: 100%;
  flex: 1;
  overflow-y: scroll;
  padding: 8px 12px;
`;

export default function ChatArea({ messages, username }) {
  const lastElementRef = useRef(null);

  useEffect(() => {
    lastElementRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      {messages.map(({ text, sender }, index) => (
        <Message
          key={index}
          text={text}
          sender={sender}
          ownMessage={sender === username}
        />
      ))}

      <div ref={lastElementRef}></div>
    </Container>
  );
}
