import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const ContactList = styled.div`
  padding: 0 16px;
  background-color: #fff;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
