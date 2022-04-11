import React, {VFC, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {MdLocalLibrary} from 'react-icons/md';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Button, useToast} from '@chakra-ui/react';
import {Summary} from '@/models/diary/summary';
import {useRouter} from 'next/router';
import {Layout} from '@/components/common/layout';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const PDF = dynamic<{summary: Summary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false,
  },
);

export const Pages: VFC<{summary: Summary; isTeacher?: boolean}> = ({
  summary,
  isTeacher,
}) => {
  const router = useRouter();
  const summaryKey = router.query.summary;
  const toast = useToast();

  return (
    <Layout>
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
                {isTeacher ? (
                  <Button
                    background="#263773"
                    color="#fff"
                    _hover={{background: '#1c2956'}}
                    mr="2"
                    onClick={() =>
                      router.push(
                        `/teacher/diary/summary/correct/${summaryKey}`,
                      )
                    }>
                    添削する
                  </Button>
                ) : (
                  <>
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

                    <CopyToClipboard
                      cursor="pointer"
                      // 本番環境のパスに入れ替え→もしisUserじゃなかったら保育士の先生が編集できるデザインに変更する。
                      text={`phoenixdiary.vercel.app/teacher/diary/summary/${summaryKey}`}>
                      <Button
                        background="#263773"
                        color="#fff"
                        _hover={{background: '#1c2956'}}
                        mr="2"
                        onClick={() =>
                          toast({
                            title: `コピーしました`,
                            position: 'bottom',
                            isClosable: true,
                          })
                        }>
                        共有リンクをコピー
                      </Button>
                    </CopyToClipboard>
                  </>
                )}
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
