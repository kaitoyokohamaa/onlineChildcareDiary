import {VFC, useContext} from 'react'

import {ChatText} from '@/components/chat/chatText'

import {Messages} from '@/models/chat'
import {AuthContext} from '@/contexts/AuthContext'
export const Chat: VFC<{
  chatMessages
}> = ({chatMessages}) => {
  const {loginUser} = useContext(AuthContext)
  return (
    <>
      {chatMessages?.map(({senderId, id, text}) => {
        return senderId === loginUser?.uid ? (
          <ChatText key={id} isSender={true} text={text} />
        ) : (
          <ChatText key={id} isSender={false} text={text} />
        )
      })}
    </>
  )
}
