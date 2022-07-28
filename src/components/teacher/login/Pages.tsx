import {Button} from '@chakra-ui/button';
import {Box, Flex, Heading} from '@chakra-ui/layout';
import {Input, Link as Links} from '@chakra-ui/react';
import {VFC} from 'react';
import Link from 'next/link';
import {UseTeacherCertification} from '@/hooks/useCertification';
import Image from 'next/image';
import {Badge} from '@chakra-ui/react';
import {BeatLoader} from 'react-spinners';
export const Pages: VFC = () => {
  const {email, setEmail, setPassword, password, signinHandler, isLoading} =
    UseTeacherCertification();
  return (
    <Box>
      <Flex>
        <Box h="100vh" bg="#273673" w="50%" pl="3">
          <Box textAlign="left" pt="10" pl="10">
            <Heading as="h5" size="md" color="white">
              HEALTHY OFFICE <Badge>保育士用</Badge>
            </Heading>
          </Box>
          <Box pt="48">
            <Image
              src="/img/top.png"
              width="900"
              height="530"
              alt="ログイン画像"
            />
          </Box>
        </Box>

        <Flex w="50%" pt="15%" justify="center">
          <Box>
            <Box textAlign="left" pt="10">
              <Heading as="h5" size="md" color="#273673">
                サインイン
              </Heading>
            </Box>
            <Box my={10}>
              <label>メールアドレス</label>
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box my={10}>
              <label>パスワード</label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Box>
            <Box>
              <Button
                isLoading={isLoading}
                spinner={<BeatLoader size={8} color="white" />}
                colorScheme="blue"
                bg="#273673"
                size="lg"
                px="40"
                py={{lg: 8}}
                boxShadow="2xl-blue"
                mb={10}
                onClick={signinHandler}>
                サインイン
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
