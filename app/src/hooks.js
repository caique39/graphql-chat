import { useEffect, useState } from "react";
import { useMutation, useSubscription, useQuery } from "@apollo/react-hooks";
import UserModel from "./models/User";
import { gql } from "apollo-boost";

const mutationCreateUser = gql`
  mutation createUser {
    createUser {
      id
      name
      avatar
    }
  }
`;

const subscriptionNewMessage = gql`
  subscription newMessage {
    newMessage {
      text
      sender
      date
    }
  }
`;

const queryMessages = gql`
  query messages {
    messages {
      text
      sender
      date
    }
  }
`;

export function useUser() {
  const [user, setUser] = useState(UserModel.get());

  const [createUser, { data, error, loading }] = useMutation(
    mutationCreateUser
  );

  useEffect(() => {
    if (!user) createUser();
  }, [createUser, user]);

  useEffect(() => {
    if (data) {
      const { createUser: userCreated } = data;

      setUser(userCreated);
      UserModel.save(userCreated);
    }
  }, [data]);

  return { user: user, error, loading };
}

export function useMessages() {
  const [messages, setMessages] = useState([]);

  const { data: queryData = {} } = useQuery(queryMessages);

  useEffect(() => {
    const newMessages = queryData.messages || [];

    setMessages(newMessages.reverse());
  }, [queryData.messages]);

  const { data: subData = {} } = useSubscription(subscriptionNewMessage);

  useEffect(() => {
    const newMessage = subData.newMessage;

    if (newMessage) {
      setMessages(messages => [...messages, newMessage]);
    }
  }, [subData.newMessage]);

  return messages;
}
