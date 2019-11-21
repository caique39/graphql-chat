import React from "react";
import { Container, Avatar, Title, Content, Subtitle } from "./atoms";

function Navbar(props) {
  const { username, userColor } = props;

  return (
    <Container>
      <Avatar />
      <Content>
        <Title>{username || "Gumy Bear"}</Title>
        <Subtitle>+ 25</Subtitle>
      </Content>
    </Container>
  );
}

export default Navbar;
