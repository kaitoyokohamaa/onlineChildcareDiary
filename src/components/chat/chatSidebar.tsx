import {VFC} from 'react'
import {Avatar, AvatarBadge, Stack} from '@chakra-ui/react'
import {Box, Flex, Text} from '@chakra-ui/layout'
export const ChatSidebar: VFC = () => {
  return (
    <Flex w="25%">
      <Box w="100%" h="87vh" overflow="scroll">
        {[...Array(1)].map((i) => {
          return (
            <Box key={i} border="2px" borderColor="#F8F8F8" py={4} px="10">
              <Flex alignItems="center">
                <Stack spacing={4}>
                  <Avatar src="https://bit.ly/dan-abramov">
                    <AvatarBadge boxSize="0.9em" bg="green.500" />
                  </Avatar>
                </Stack>
                <Box pl="3">
                  <Text fontWeight="bold">斉藤タカシ</Text>
                  <Text fontSize="sm" color="#707070">
                    本日の日誌を確認しました。
                  </Text>
                </Box>
              </Flex>
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}
