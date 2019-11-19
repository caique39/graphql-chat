import { IMessage } from '../message/model'

interface IUser {
  id: string
  name: string
  color: string
  chats: IChat[]
}

interface IChat {
  user: IUser
  messages: [IMessage]
}

export { IChat, IUser }
