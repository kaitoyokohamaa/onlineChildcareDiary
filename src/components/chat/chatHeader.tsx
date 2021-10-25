import {VFC} from 'react'
import {Avatar, Stack} from '@chakra-ui/react'
import {Box, Flex, Text} from '@chakra-ui/layout'
import {ArrowBackIcon} from '@chakra-ui/icons'
import {ChatsTeacherInfo} from '@/models/chat'
export const ChatHeader: VFC<ChatsTeacherInfo> = ({name, image}) => {
  return (
    <Box pb="10">
      <Box borderBottom="4px" borderColor="#56A9D3" py={4} px="10">
        <Flex alignItems="center">
          <ArrowBackIcon w={8} h={5} />
          <Stack direction="row" spacing={4}>
            <Avatar src={image}></Avatar>
          </Stack>
          <Text pl="3">{name}</Text>
        </Flex>
      </Box>
    </Box>
  )
}
