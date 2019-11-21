import React from "react";
import { Container, Avatar, Title, Content, Subtitle } from "./atoms";

function Navbar({ username, userColor, avatar }) {
  return (
    <Container>
      <Avatar src={avatar} />
      <Content>
        <Title>{username}</Title>
        <Subtitle>+ 25</Subtitle>
      </Content>
    </Container>
  );
}

export default Navbar;
