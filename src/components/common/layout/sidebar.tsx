import {VFC, useContext} from 'react'
import Link from 'next/link'
import {AuthContext} from '@/contexts/AuthContext'
import {Button_} from '@/components/common/button'
import {SidebarLink} from './sidebarLink'
import {Box, Flex, Heading, HStack, Text} from '@chakra-ui/layout'
import {MdLocalLibrary, MdChatBubble, MdHome, MdBook} from 'react-icons/md'
import {Badge} from '@chakra-ui/react'
import {IoLogOut} from 'react-icons/io5'
import {VscGear} from 'react-icons/vsc'
import {useRouter} from 'next/router'
import firebase from '@/lib/firebase'
import {v1 as uuidv1} from 'uuid'
export const Sidebar: VFC<{isTeacher?: boolean}> = ({isTeacher}) => {
  const {chatKey, dockey} = useContext(AuthContext)

  const router = useRouter()

  const signOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('ログアウトしました')
        router.push('/login')
      })
  }
  return (
    <Box px={4}>
      <Box textAlign="center">
        <Heading as="h5" size="md" color="white" mt={10}>
          SMART DIARY PHOENIX
        </Heading>
        {isTeacher && <Badge>保育士用</Badge>}
      </Box>

      <>
        {!isTeacher ? (
          <>
            <Box textAlign="center" my={8}>
              <Button_ bg="#9FD0E8" color="white" _hover={{bg: '#54b5e4'}}>
                <Link href={`/diary/register/${uuidv1()}`}>
                  <a>＋日誌登録</a>
                </Link>
              </Button_>
            </Box>
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath.indexOf('/home') !== -1 && '4px'}
              borderColor={router.asPath.indexOf('/home') !== -1 && '#56A9D3'}
              bg={
                router.asPath.indexOf('/home') !== -1 &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/home' ? '#84B9D4' : 'white'}
              >
                <Link href={`/user/home/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/home' && -1.5}
                    >
                      <HStack w="50%">
                        <MdHome size={20} />
                        <Text py={6}>ホーム</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
            {/* TODO 実習先情報の作成(大学生教授用の画面作成までいけた場合のみ)*/}
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath === '/school' && '4px'}
              borderColor={router.asPath === '/school' && '#56A9D3'}
              bg={
                router.asPath === '/school' &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/school' ? '#84B9D4' : 'white'}
              >
                <Link href="/school">
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/school' && -1.5}
                    >
                      <HStack w="50%">
                        <MdBook size={20} />
                        <Text py={6}>実習しおり</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
            {/* 日誌 */}
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath.indexOf('/diary') !== -1 && '4px'}
              borderColor={router.asPath.indexOf('/diary') !== -1 && '#56A9D3'}
              bg={
                router.asPath.indexOf('/diary') !== -1 &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={
                  router.asPath.indexOf('/diary') !== -1 ? '#84B9D4' : 'white'
                }
              >
                <Link href={`/diary/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath.indexOf('/diary') !== -1 && -1.5}
                    >
                      <HStack w="50%">
                        <MdLocalLibrary size={20} />
                        <Text py={6}>日誌</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>

            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath === '/chat' && '4px'}
              borderColor={router.asPath === '/chat' && '#56A9D3'}
              bg={
                router.asPath === '/chat' &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/chat' ? '#84B9D4' : 'white'}
              >
                <Link href={`/user/chat/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/chat' && -1.5}
                    >
                      <HStack w="50%">
                        <MdChatBubble size={20} />
                        <Text py={6}>チャット</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath === '/edit' && '4px'}
              borderColor={router.asPath === '/edit' && '#56A9D3'}
              bg={
                router.asPath === '/edit' &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/edit' ? '#84B9D4' : 'white'}
              >
                <Link href="user/edit">
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/edit' && -1.5}
                    >
                      <HStack w="50%">
                        <VscGear size={20} />
                        <Text py={6}>設定</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
          </>
        ) : (
          <>
            <Box
              mt="20"
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath === '/chat' && '4px'}
              borderColor={router.asPath === '/chat' && '#56A9D3'}
              bg={
                router.asPath === 'chat' &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/chat' ? '#84B9D4' : 'white'}
              >
                <Link href={`/teacher/chat/${chatKey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/chat' && -1.5}
                    >
                      <HStack w="50%">
                        <MdChatBubble size={20} />
                        <Text py={6}>チャット</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath === '/edit' && '4px'}
              borderColor={router.asPath === '/edit' && '#56A9D3'}
              bg={
                router.asPath === '/edit' &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }
            >
              <SidebarLink
                color={router.asPath === '/edit' ? '#84B9D4' : 'white'}
              >
                <Link href="/edit">
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/edit' && -1.5}
                    >
                      <HStack w="50%">
                        <VscGear size={20} />
                        <Text py={6}>基本情報</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
          </>
        )}
      </>

      <Box
        bottom={isTeacher ? -400 : -150}
        position="relative"
        _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
        onClick={signOutHandler}
      >
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <IoLogOut size={20} />
              <Text py={6}>ログアウト</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
    </Box>
  )
}
