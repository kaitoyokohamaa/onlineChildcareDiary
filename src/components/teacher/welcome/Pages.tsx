import {VFC, useContext} from 'react';
import Image from 'next/image';
import {Layout} from '@/components/common/layout';
import {Box, Flex, Heading} from '@chakra-ui/layout';
import {Text} from '@chakra-ui/react';
import {AuthContext} from '@/contexts/AuthContext';
import {useRouter} from 'next/router';
export const Pages: VFC = () => {
  const {dockey} = useContext(AuthContext);
  const router = useRouter();
  if (dockey) {
    router.push(`http://localhost:3000/teacher/profile/${dockey}`);
  }
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
          left: 285,
          bottom: 0,
          opacity: 0.2,
        }}>
        <Box>
          <Image
            src="/img/welcome.png"
            width="570"
            height="330"
            alt="welcome"
          />
          <Heading>HEALTHY OFFICEへようこそ</Heading>
          <Text pt="10" fontWeight="bold">
            チャットから実習生の保育日誌にコメントしてみましょう
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};
