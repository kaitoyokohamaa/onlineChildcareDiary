import React, {VFC} from 'react';
import dynamic from 'next/dynamic';
import {MdLocalLibrary} from 'react-icons/md';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/react';

import {useRouter} from 'next/router';
import {Layout} from '@/components/common/layout';
import {Introspection} from '@/models/diary/introspection';
const PDF = dynamic<{introspection: Introspection}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false,
  },
);

export const Pages: VFC<{introspection: Introspection}> = ({introspection}) => {
  const router = useRouter();
  const introspectionKey = router.query.introspection;
  return (
    <Layout>
      <Box mt="10" px={16}>
        {introspection ? (
          <>
            <Flex alignItems="center">
              <Box bg="#F8F8F8" p="2" borderRadius="md">
                <MdLocalLibrary color=" #9FD0E8" />
              </Box>
              <Text pl="8" fontWeight="bold" color="#707070">
                反省会の記録
              </Text>
              <Box textAlign="right" m="0 0 0 auto">
                <Button
                  background="#263773"
                  color="#fff"
                  _hover={{background: '#1c2956'}}
                  mr="2"
                  onClick={() =>
                    router.push(
                      `/user/diary/introspection/edit/${introspectionKey}`,
                    )
                  }>
                  編集する
                </Button>
              </Box>
            </Flex>
            <Divider mt="5" />
            <PDF introspection={introspection} />
          </>
        ) : (
          <>
            <p>反省会の記録を追加してください</p>
            <Button
              background="#263773"
              color="#fff"
              _hover={{background: '#1c2956'}}
              onClick={() => router.push(`/user/diary/${introspectionKey}`)}
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
