import {VFC} from 'react'

import {ChatText} from '@/components/chat/chatText'

import {Messages} from '@/models/chat'

export const Chat: VFC<{chatMessages: Messages[]}> = ({chatMessages}) => {
  return (
    <>
      {chatMessages?.map((res: Messages) => {
        return (
          <ChatText key={res.chatsId} isTeacher={false} text={res.chats.text} />
        )
      })}
    </>
  )
}
