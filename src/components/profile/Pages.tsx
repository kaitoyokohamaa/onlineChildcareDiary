import {VFC} from 'react'
import {User} from '@/models/user'
import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {Avatar, useColorModeValue, Button, Divider} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {Layout} from '@/components/common/layout'
export const Pages: VFC<{user: User}> = ({user}) => {
  const router = useRouter()
  const currentPath = router.asPath
  const editPath = currentPath.replace('profile', 'edit')
  return (
    <Layout isHeader>
      <Box mt="2" px={16} overflow="scroll" h="85vh">
        <Text
          fontWeight="bold"
          w="100%"
          fontSize="18px"
          position="relative"
          display="inline-block"
          _after={{
            position: 'absolute',
            top: '50%',
            display: 'inline-block',
            width: '87%',
            height: '1px',
            left: '13%',
            backgroundColor: '#00000029',
            content: '" "'
          }}
        >
          プロフィール
        </Text>

        <Flex py={1}>
          <Box w="100%" boxShadow={'2xl'} p="14" my="10">
            <Flex>
              <Box mr="10">
                <Avatar size="2xl" src={user.dispayImage} alt={'Author'} />
              </Box>

              <Box pl="5">
                <Flex justifyContent="space-between">
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontWeight="bold"
                    fontFamily={'body'}
                  >
                    {user.name ? user.name : '未記入'}
                  </Heading>
                  <Box mt="-4">
                    <Button
                      background="#263773"
                      color="#fff"
                      _hover={{background: '#1c2956'}}
                    >
                      <Link href={`/profile${editPath}`}>
                        <a>プロフィールを編集する</a>
                      </Link>
                    </Button>
                  </Box>
                </Flex>
                <Text color={'gray.500'} pt="5">
                  {user.selfIntroduction ? user.selfIntroduction : '未記入'}
                </Text>
              </Box>
            </Flex>

            <Flex mt="10">
              <Box>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontWeight="bold"
                  fontFamily={'body'}
                  mb="10"
                >
                  基本情報
                </Heading>
              </Box>
            </Flex>
            <Flex>
              {/* 大学名 */}
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  大学
                </Text>
                <Text pt="2">東洋大学</Text>
              </Box>
              {/* 性別 */}
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  性別
                </Text>
                <Text pt="2">{user.sex ? user.sex : '未記入'}</Text>
              </Box>
              {/* 生年月日 */}
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  生年月日
                </Text>
                <Text pt="2">{user.birthday ? user.birthday : '未記入'}</Text>
              </Box>
              {/* メールアドレス */}
              <Box>
                <Text fontWeight="bold" color="#273264">
                  メールアドレス
                </Text>
                <Text pt="2">{user.address ? user.address : '未記入'}</Text>
              </Box>
            </Flex>
            <Divider mt="10" colorScheme="blue" size="2xl" />
            <Flex py="10">
              {/* 電話アドレス */}
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  電話
                </Text>
                <Text pt="2">
                  {user.cellphoneNumber ? user.cellphoneNumber : '未記入'}
                </Text>
              </Box>

              {/* 実習先*/}
              <Box>
                <Text fontWeight="bold" color="#273264">
                  実習先
                </Text>
                <Text pt="2">
                  {user.practicalTraining ? user.practicalTraining : '未記入'}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}
