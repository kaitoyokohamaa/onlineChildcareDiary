import {VFC} from 'react'

import {ChatText} from '@/components/chat/chatText'

export const Chat: VFC = ({chatMessages}) => {
  return (
    <>
      {chatMessages.map((res) => {
        return <ChatText key={res.id} isTeacher={false} text={res.chats.text} />
      })}
      <ChatText
        isTeacher={false}
        text={`ありがとう
      ore
      多fkrforこ
      トンカツ`}
      />
    </>
  )
}
