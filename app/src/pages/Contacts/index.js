import React from "react";
import Contact from "../../components/Contact";
import { CustomLink, Container, ContactList } from "./atoms";

const ContactLink = props => (
  <CustomLink to={`/messenger/${props.name}`}>
    <Contact {...props} />
  </CustomLink>
);

function Contacts() {
  const contacts = [
    {
      name: "Gumy Bear",
      lastMessage: "Oi, Gumy Bear!"
    },
    {
      name: "Gumy Bear2",
      lastMessage: "Oi, Gumy Bear!"
    },
    {
      name: "Gumy Bear3",
      lastMessage: "Oi, Gumy Bear!"
    }
  ];

  return (
    <Container>
      <h2>Bem vindo, Gumy</h2>
      <ContactList>{contacts.map(ContactLink)}</ContactList>
    </Container>
  );
}

export default Contacts;
