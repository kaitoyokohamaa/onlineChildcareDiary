import {VFC} from 'react'
import Image from 'next/image'
import {Layout} from '@/components/common/layout'
import {Box, Flex, Heading} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'
export const Pages: VFC = () => {
  return (
    <Layout isTeacher>
      <Flex
        h="100vh"
        justifyItems="center"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        _before={{
          content: '""',
          bgImage: 'url(/img/welcome-background.jpeg)',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 260,
          bottom: 0,
          opacity: 0.2,
        }}
      >
        <Box>
          <Image
            src="/img/welcome.png"
            width="570"
            height="330"
            alt="welcome"
          />
          <Heading>SMART DIARY PHOENIXへようこそ</Heading>
          <Text pt="10" fontWeight="bold">
            チャットから実習生の保育日誌にコメントしてみましょう
          </Text>
        </Box>
      </Flex>
    </Layout>
  )
}
