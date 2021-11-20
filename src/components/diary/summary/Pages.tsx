import React, {VFC} from 'react';
import dynamic from 'next/dynamic';
import {MdLocalLibrary} from 'react-icons/md';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/react';
import {Summary} from '@/models/diary/summary';
import {useRouter} from 'next/router';
import {Layout} from '@/components/common/layout';

const PDF = dynamic<{summary: Summary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false,
  },
);

export const Pages: VFC<{summary: Summary}> = ({summary}) => {
  const router = useRouter();
  const summaryKey = router.query.summary;

  return (
    <Layout isHeader>
      <Box mt="10" px={16}>
        {summary ? (
          <>
            <Flex alignItems="center">
              <Box bg="#F8F8F8" p="2" borderRadius="md">
                <MdLocalLibrary color=" #9FD0E8" />
              </Box>
              <Text pl="8" fontWeight="bold" color="#707070">
                実習のまとめ
              </Text>
              <Box textAlign="right" m="0 0 0 auto">
                <Button
                  background="#263773"
                  color="#fff"
                  _hover={{background: '#1c2956'}}
                  mr="2"
                  onClick={() =>
                    router.push(`/user/diary/summary/edit/${summaryKey}`)
                  }>
                  編集する
                </Button>
              </Box>
            </Flex>
            <Divider mt="5" />
            <PDF summary={summary} />
          </>
        ) : (
          <>
            <p>実習のまとめを記入してください</p>
            <Button
              background="#263773"
              color="#fff"
              _hover={{background: '#1c2956'}}
              onClick={() => router.push(`/user/diary/${summaryKey}`)}
              mr="2"
              rounded="full">
              戻る
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
};
