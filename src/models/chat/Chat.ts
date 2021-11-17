import {Teacher} from '@/models/teacher'
export type Chats = {
  senderId: string
  sentAt: Date
  text: string
}

export type Messages = {
  chats: {senderId: string; sentAt: Date; text: string}
}

export type ChatsProps = {
  chatKey: string
  teacherData: Teacher
  isTeacher?: boolean
}

export type ChatsTeacherInfo = {
  name: string
  image: string
}

export type ChatsSidebarProps = {
  lastMessage: string
  name: string
  image: string
}
