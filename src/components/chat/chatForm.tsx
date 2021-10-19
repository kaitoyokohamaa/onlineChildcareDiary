import {VFC, Fragment} from 'react'

import {
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import {MdSend, MdAddBox} from 'react-icons/md'
export const ChatForm: VFC = () => {
  return (
    <Fragment>
      <InputGroup>
        <InputLeftElement>
          <MdAddBox color="#56A9D3" size="30" />
        </InputLeftElement>
        <Input />
        <InputRightElement>
          <MdSend color="#56A9D3" size="30" onClick={() => alert('送信')} />
        </InputRightElement>
      </InputGroup>
    </Fragment>
  )
}
