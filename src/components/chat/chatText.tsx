import {Box, Flex, Text} from '@chakra-ui/layout'
export const ChatText = ({isTeacher, text}) => {
  return (
    <>
      {isTeacher ? (
        <Flex justifyContent="flex-start">
          <Box bgColor="#E9E9E9" p="3" mt="4">
            <Text whiteSpace="pre-line">{text}</Text>
          </Box>
        </Flex>
      ) : (
        <Flex justifyContent="flex-end">
          <Box bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text whiteSpace="pre-line">{text}</Text>
          </Box>
        </Flex>
      )}
    </>
  )
}
