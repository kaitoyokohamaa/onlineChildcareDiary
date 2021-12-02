import React, {VFC, useState, useContext, useRef} from 'react';
import {AuthContext} from '@/contexts/AuthContext';
import {InputRightElement, InputGroup, Box} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {MdSend, MdAddBox} from 'react-icons/md';
import {AutoResizeTextarea} from '@/components/common/textarea/AutoResizeTextare';
import {chatRef} from '@/lib/firestore';
import firebase from 'firebase/app';

export const ChatForm: VFC = () => {
  const [text, setText] = useState<string>('');
  const router = useRouter();
  const inputEl = useRef(null);
  const {chatKey, loginUser} = useContext(AuthContext);
  const myDocKey = router.query.chat;
  const submitHandler = async () => {
    const chatContents = document.getElementById('chatContents');
    chatKey === myDocKey &&
      (await chatRef(String(myDocKey)).add({
        text,
        senderId: loginUser.uid,
        sentAt: firebase.firestore.Timestamp.now(),
      }));
    setText('');

    chatContents.scrollTop = chatContents.scrollHeight;
  };
  return (
    <Box h="10vh">
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
    </Box>
  );
};
