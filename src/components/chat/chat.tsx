import {VFC, useContext} from 'react'

import {ChatText} from '@/components/chat/chatText'

import {Messages} from '@/models/chat'
import {AuthContext} from '@/contexts/AuthContext'
export const Chat: VFC<{
  chatMessages: Messages[]
}> = ({chatMessages}) => {
  const {loginUser} = useContext(AuthContext)
  return (
    <>
      {chatMessages?.map((res: Messages) => {
        return res.chats.senderId === loginUser?.uid ? (
          <ChatText key={res.chatsId} isSender={true} text={res.chats.text} />
        ) : (
          <ChatText key={res.chatsId} isSender={false} text={res.chats.text} />
        )
      })}
    </>
  )
}
