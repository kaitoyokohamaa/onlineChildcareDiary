import React, {VFC, useState, useContext, useRef} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {InputRightElement, InputGroup} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {MdSend, MdAddBox} from 'react-icons/md'
import {AutoResizeTextarea} from '@/components/common/textarea/AutoResizeTextare'
import {chatRef} from '@/lib/firestore'
import firebase from 'firebase/app'

export const ChatForm: VFC = () => {
  const [text, setText] = useState<string>('')
  const router = useRouter()
  const {dockey} = useContext(AuthContext)
  const myDocKey = router.query.chat
  const inputEl = useRef(null)
  const submitHandler = () => {
    dockey === myDocKey &&
      chatRef(String(myDocKey)).add({
        text,
        senderId: dockey,
        sentAt: firebase.firestore.Timestamp.now()
      })
    setText('')
  }
  return (
    <>
      <InputGroup>
        <AutoResizeTextarea
          text={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(e.target.value)
          }
          ref={inputEl}
        />
        <InputRightElement>
          <MdSend color="#56A9D3" size="30" onClick={submitHandler} />
        </InputRightElement>
      </InputGroup>
    </>
  )
}
