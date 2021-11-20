import {VFC, useContext} from 'react';
import Link from 'next/link';
import {AuthContext} from '@/contexts/AuthContext';
import {Button_} from '@/components/common/button';
import {SidebarLink} from './sidebarLink';
import {Box, Flex, Heading, HStack, Text} from '@chakra-ui/layout';
import {MdLocalLibrary, MdChatBubble, MdHome, MdBook} from 'react-icons/md';
import {Badge} from '@chakra-ui/react';
import {IoLogOut} from 'react-icons/io5';
import {VscGear} from 'react-icons/vsc';
import {useRouter} from 'next/router';
import firebase from '@/lib/firebase';
import {v1 as uuidv1} from 'uuid';
export const Sidebar: VFC<{isTeacher?: boolean}> = ({isTeacher}) => {
  const {chatKey, dockey} = useContext(AuthContext);

  const router = useRouter();

  const signOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('ログアウトしました');
        router.push('/login');
      });
  };
  return (
    <Box px={4}>
      <Box textAlign="center">
        <Heading as="h5" size="md" color="white" mt={10}>
          SMART DIARY PHOENIX
        </Heading>
        {isTeacher && <Badge>保育士用</Badge>}
      </Box>

      <>
        {!isTeacher && router.asPath.includes('user') ? (
          <>
            <Box textAlign="center" my={12}>
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
              }>
              <SidebarLink
                color={
                  router.asPath.indexOf('/home') !== -1 ? '#84B9D4' : 'white'
                }>
                <Link href={`/user/home/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath.indexOf('/home') !== -1 && -1.5}>
                      <HStack w="60%">
                        <MdHome size={20} />
                        <Text py={6}>ホーム</Text>
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
              }>
              <SidebarLink
                color={
                  router.asPath.indexOf('/diary') !== -1 ? '#84B9D4' : 'white'
                }>
                <Link href={`/user/diary/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath.indexOf('/diary') !== -1 && -1.5}>
                      <HStack w="60%">
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
              borderLeft={router.asPath.indexOf('/chat') !== -1 && '4px'}
              borderColor={router.asPath.indexOf('/chat') !== -1 && '#56A9D3'}
              bg={
                router.asPath.indexOf('/chat') !== -1 &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }>
              <SidebarLink
                color={
                  router.asPath.indexOf('/chat') !== -1 ? '#84B9D4' : 'white'
                }>
                <Link href={`/user/chat/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath === '/chat' && -1.5}>
                      <HStack w="60%">
                        <MdChatBubble size={20} />
                        <Text py={6}>チャット</Text>
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
              borderLeft={router.asPath.indexOf('/profile') !== -1 && '4px'}
              borderColor={
                router.asPath.indexOf('/profile') !== -1 && '#56A9D3'
              }
              bg={
                router.asPath.indexOf('/profile') !== -1 &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }>
              <SidebarLink
                color={
                  router.asPath.indexOf('/profile') !== -1 ? '#84B9D4' : 'white'
                }>
                <Link href={`/teacher/profile/${dockey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath.indexOf('/profile') !== -1 && -1.5}>
                      <HStack w="60%">
                        <MdChatBubble size={20} />
                        <Text py={6}>プロフィール</Text>
                      </HStack>
                    </Flex>
                  </a>
                </Link>
              </SidebarLink>
            </Box>
            <Box
              _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
              borderLeft={router.asPath.indexOf('/chat') !== -1 && '4px'}
              borderColor={router.asPath.indexOf('/chat') !== -1 && '#56A9D3'}
              bg={
                router.asPath.indexOf('/chat') !== -1 &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }>
              <SidebarLink
                color={
                  router.asPath.indexOf('/chat') !== -1 ? '#84B9D4' : 'white'
                }>
                <Link href={`/teacher/chat/${chatKey}`}>
                  <a>
                    <Flex
                      justify="center"
                      mx={router.asPath.indexOf('/chat') !== -1 && -1.5}>
                      <HStack w="60%">
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
              borderLeft={router.asPath.includes('history') && '4px'}
              borderColor={router.asPath.includes('history') && '#56A9D3'}
              bg={
                router.asPath.includes('history') &&
                '#FFFFFF1A 0% 0% no-repeat padding-box'
              }>
              <SidebarLink
                color={router.asPath.includes('history') ? '#84B9D4' : 'white'}>
                <Link href={`/teacher/history/${dockey}/${chatKey}`}>
                  <a>
                    <Flex justify="center" mx={-1.5}>
                      <HStack w="60%">
                        <VscGear size={20} />
                        <Text py={6}>添削履歴</Text>
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
        bottom={-150}
        position="relative"
        _hover={{bg: '#FFFFFF1A 0% 0% no-repeat padding-box'}}
        onClick={signOutHandler}>
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w={isTeacher ? '60%' : '50%'}>
              <IoLogOut size={20} />
              <Text py={6}>ログアウト</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
    </Box>
  );
};
