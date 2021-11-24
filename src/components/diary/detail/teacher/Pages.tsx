import React, {VFC, useContext, useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import {MdLocalLibrary} from 'react-icons/md';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/react';
import {DetailDiary, DocKeyId} from '@/models/diary/register';
import {useRouter} from 'next/router';
import {Layout} from '@/components/common/layout';
import {AuthContext} from '@/contexts/AuthContext';
import {adminRegisterDetailRef} from '@/lib/firestore';

const PDF = dynamic<{detailDiary: DetailDiary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false,
  },
);

export const Pages: VFC<DocKeyId> = ({userKey, detailKey}) => {
  const router = useRouter();

  const {loginUser} = useContext(AuthContext);

  const [detailDiary, setDetailDiary] = useState<DetailDiary>();
  useEffect(() => {
    detailKey &&
      userKey &&
      adminRegisterDetailRef(String(userKey), String(detailKey)).onSnapshot(
        (res) => {
          // firebaseの型周りを調べる。
          let data = null;
          data = res.data();
          setDetailDiary(data);
        },
      );
  }, [detailKey, userKey, loginUser]);

  return (
    <Layout isTeacher>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>

          <Text pl="8" fontWeight="bold" color="#707070">
            実習記録1日目
          </Text>

          <Box textAlign="right" m="0 0 0 auto">
            <Button
              background="#F5F5F5"
              color="#5D5A5A"
              mr="2"
              onClick={() => {
                router.push(
                  `/teacher/diary/for-teachers/${detailKey}/${userKey}`,
                );
              }}>
              添削する
            </Button>
          </Box>
        </Flex>
        <Divider mt="5" />
        <PDF detailDiary={detailDiary} />
      </Box>
    </Layout>
  );
};
