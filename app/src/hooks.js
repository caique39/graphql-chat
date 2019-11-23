import { useEffect, useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import UserModel from "./models/User";

const mutationCreateUser = gql`
  mutation {
    createUser {
      name
      id
      avatar
      phone
    }
  }
`;

const queryMessages = gql`
  query {
    messages {
      date
      sender
      text
    }
  }
`;

const subscriptionMessage = gql`
  subscription {
    newMessage {
      date
      sender
      text
    }
  }
`;

export function useUser() {
  const [user, setUser] = useState(UserModel.get());
  const [createUser, { data, loading, error }] = useMutation(
    mutationCreateUser
  );

  const { createUser: newUser } = data || {};

  useEffect(() => {
    if (!user) createUser();
  }, []);

  useEffect(() => {
    if (newUser) {
      UserModel.save(newUser);
      setUser(newUser);
    }
  }, [newUser]);

  return { user, loading, error };
}

export function useMessages() {
  const [localMessages, setLocalMessages] = useState([]);
  const { data, loading, error } = useQuery(queryMessages);
  const { messages } = data || {};

  useEffect(() => {
    if (messages) {
      setLocalMessages(messages);
    }
  }, [messages]);

  const { data: subscriptionData } = useSubscription(subscriptionMessage);
  const { newMessage } = subscriptionData || {};

  useEffect(() => {
    if (newMessage) {
      setLocalMessages(messages => [...messages, newMessage]);
    }
  }, [newMessage]);

  return { messages: localMessages, loading, error };
}
