import {VFC} from 'react'
import Image from 'next/image'
import {Layout} from '@/components/common/layout'
import {Box, Flex, Heading} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'
export const Pages: VFC = () => {
  return (
    <Layout isHeader>
      <Flex
        h="80vh"
        justifyItems="center"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        _before={{
          content: '""',
          bgImage: 'url(/img/welcome-background.jpeg)',
          pos: 'absolute',
          top: 59,
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
            早速日誌を登録してみましょう
          </Text>
        </Box>
      </Flex>
    </Layout>
  )
}
