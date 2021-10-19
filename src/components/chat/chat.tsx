import {VFC} from 'react'

import {ChatText} from '@/components/chat/chatText'

export const Chat: VFC = () => {
  return (
    <>
      <ChatText
        isTeacher={true}
        text={`ありがとうfrrrrr
      ore
      多fkrforこ`}
      />
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
