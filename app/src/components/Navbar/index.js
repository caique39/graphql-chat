import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  background-color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 100px;
  margin-right: 16px;
`;

const Username = styled.h3`
  font-size: 16px;
  color: #212121;
  margin: 0;
`;

const Phone = styled.span`
  font-size: 14px;
  color: #757575;
`;

export default function Navbar({ username, phone, avatar }) {
  return (
    <Container>
      <Avatar src={avatar}></Avatar>
      <div>
        <Username>{username}</Username>
        <Phone>{phone}</Phone>
      </div>
    </Container>
  );
}
