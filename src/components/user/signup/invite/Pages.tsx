import {Button} from '@chakra-ui/button';
import {Box, Flex, Heading} from '@chakra-ui/layout';
import {Input} from '@chakra-ui/react';
import {VFC} from 'react';
import {UseInviteCertification} from '@/hooks/useCertification';
import {BeatLoader} from 'react-spinners';
export const Pages: VFC<{inviteKey: string}> = ({inviteKey}) => {
  const {email, setEmail, setPassword, password, signupHandler, isLoading} =
    UseInviteCertification(inviteKey);

  return (
    <Box>
      <Flex>
        <Flex h="100vh" bg="#273673" w="50%" pt="25%" pl="3">
          <Box>
            <Heading as="h3" size="lg" color="white" mb={5}>
              招待用 URLヘようこそ
            </Heading>
          </Box>
        </Flex>

        <Flex w="50%" pt="15%" justify="center">
          <Box>
            <Flex align="center">
              <Box textAlign="center">
                <Heading as="h5" size="md" color="#273673">
                  SMART DIARY PHOENIX
                </Heading>
              </Box>
            </Flex>
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
                onClick={signupHandler}>
                新規登録
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
