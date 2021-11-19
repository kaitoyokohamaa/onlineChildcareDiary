import {Teacher} from '@/models/teacher'
export type Chats = {
  senderId: string
  sentAt: Date
  text: string
}

export type AllChatContent = {
  chatKey?: string
  teacherData?: Teacher
  isTeacher?: boolean
  chatData?: Messages
}

export type Messages = {
  senderId: string
  sentAt: Date
  text: string
  id: string
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
