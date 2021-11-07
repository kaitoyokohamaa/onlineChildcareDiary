import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Textarea, Button} from '@chakra-ui/react'
import {useState, useContext} from 'react'
import firebase from 'firebase/app'
import {AuthContext} from '@/contexts/AuthContext'
import {MdLocalLibrary} from 'react-icons/md'
import {Layout} from '@/components/common/layout'
import {introspectionRef} from '@/lib/firestore'

export const Register = () => {
  const [introspection, setIntrospection] = useState<string>('')
  const {dockey} = useContext(AuthContext)

  const submitHandler = () => {
    introspectionRef(dockey).add({
      introspection,
      createdAt: firebase.firestore.Timestamp.now(),
    })
  }
  return (
    <Layout isHeader>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            反省会の記録
          </Text>
        </Flex>
        <Divider mt="5" />
        <Box overflow="scroll" h="79vh">
          <Box my="8">
            <Flex mt="2">
              <Textarea
                size="lg"
                onChange={(e) => setIntrospection(e.target.value)}
                type="text"
                placeholder="反省会の記録"
              />
            </Flex>
          </Box>

          <Box my="8">
            <Flex w="100%" mt="2" gap={6}>
              <Box
                textAlign="right"
                w="100%"
                bg="#FCFCFC 0% 0% no-repeat padding-box;"
                p="10"
              >
                {/* todo:一時保存機能 */}
                <Button
                  ml="3"
                  w="32"
                  variant="outline"
                  colorScheme="blue"
                  border="1px"
                  borderColor="#273264"
                  bg="#fff"
                  color="#273264"
                >
                  一時保存
                </Button>
                <Button
                  onClick={submitHandler}
                  w="32"
                  ml="3"
                  bg="#273264"
                  color="#fff"
                  _hover={{bg: '#141933'}}
                >
                  保存する
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
