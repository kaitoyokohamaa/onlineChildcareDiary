export type Chats = {
  senderId: string
  sentAt: Date
  text: string
}[]

export type Messages = {
  chats: {senderId: string; sentAt: Date; text: string}
  chatsId: string
}
