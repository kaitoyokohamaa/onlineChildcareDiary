import {Button} from '@chakra-ui/button'
import {Box, Flex, Heading} from '@chakra-ui/layout'
import {Input, Divider, FormControl, FormLabel, HStack} from '@chakra-ui/react'
import {VFC} from 'react'
import {Layout} from '@/components/common/layout'
import {Dropzone} from '@/components/common/dropzone'
import {UseInviteCertification} from '@/hooks/useCertification'
export const Pages: VFC = () => {
  return (
    <Layout isTeacher>
      <Box p="10">
        <Heading size="lg" color="#273673">
          基本情報
        </Heading>
        <Divider mt="10" mb="4" />

        <FormControl w="17%">
          <FormLabel>画像</FormLabel>
          <Dropzone />
        </FormControl>
        <Divider my="4" />
        <Box mt="6">
          <HStack spacing="24px">
            {/* <Flex w="90%"> */}
            <FormControl id="email">
              <FormLabel>名前</FormLabel>
              <Input variant="flushed" placeholder="名前" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type="email"
                placeholder="メールアドレス"
                variant="flushed"
              ></Input>
            </FormControl>
            {/* </Flex> */}
          </HStack>
          <HStack spacing="24px" mt="10">
            <FormControl id="email">
              <FormLabel>所属</FormLabel>
              <Input variant="flushed" placeholder="テスト園" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>役職</FormLabel>
              <Input variant="flushed" placeholder="役職" />
            </FormControl>
          </HStack>
          <HStack spacing="24px" mt="10">
            <FormControl id="email">
              <FormLabel>電話番号</FormLabel>
              <Input variant="flushed" placeholder="電話番号" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>生年月日</FormLabel>
              <Input variant="flushed" placeholder="生年月日" />
            </FormControl>
          </HStack>
        </Box>

        <Box mt="20" textAlign="end">
          <Button
            _hover={{background: '#1c2c6e'}}
            background="#273673"
            color="white"
            borderRadius="40"
            px="8"
          >
            登録する
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
