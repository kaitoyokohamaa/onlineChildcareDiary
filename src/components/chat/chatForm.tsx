import {VFC, useState, useContext} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {MdSend, MdAddBox} from 'react-icons/md'
import {chatRef} from '@/lib/firestore'
import firebase from 'firebase/app'
export const ChatForm: VFC = () => {
  const [text, setText] = useState<string>('')
  const router = useRouter()
  const {dockey} = useContext(AuthContext)
  const myDocKey = router.query.chat
  const submitHandler = () => {
    dockey === myDocKey &&
      chatRef(String(myDocKey)).add({
        text,
        senderId: dockey,
        sentAt: firebase.firestore.Timestamp.now()
      })
  }
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <MdAddBox color="#56A9D3" size="30" />
        </InputLeftElement>
        <Input onChange={(e) => setText(e.target.value)} />
        <InputRightElement>
          <MdSend color="#56A9D3" size="30" onClick={submitHandler} />
        </InputRightElement>
      </InputGroup>
    </>
  )
}
