import {VFC, useState, useEffect} from 'react'

import {ChatText} from '@/components/chat/chatText'
import {chatRef} from '@/lib/firestore'
export const Chat: VFC<{chatKey: string}> = ({chatKey}) => {
  const [chatMessages, setChatMessages] = useState()

  useEffect(() => {
    chatRef(chatKey)
      .orderBy('sentAt', 'asc')
      .onSnapshot((res) => {
        let chatMessagesArray = []
        res.forEach((item) => {
          chatMessagesArray.push({chatsId: item.id, chats: item.data()})
        })
        setChatMessages(chatMessagesArray)
      })
  }, [setChatMessages, chatKey])
  return (
    <>
      {chatMessages?.map((res) => {
        return (
          <ChatText
            key={res.chatsId.id}
            isTeacher={false}
            text={res.chats.text}
          />
        )
      })}
      <ChatText
        isTeacher={true}
        text={`ありがとう
      ore
      多fkrforこ
      トンカツ`}
      />
    </>
  )
}
