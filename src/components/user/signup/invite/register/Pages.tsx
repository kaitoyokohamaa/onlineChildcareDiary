import {Button} from '@chakra-ui/button';
import {Box, Heading} from '@chakra-ui/layout';
import {Input, Divider, FormControl, FormLabel, HStack} from '@chakra-ui/react';
import {VFC, useState} from 'react';
import {Layout} from '@/components/common/layout';
import {Dropzone} from '@/components/common/dropzone';
import {invitedUserRef, teacherRef} from '@/lib/firestore';
import {useRouter} from 'next/router';
export const Pages: VFC<{
  inviteKey: string;
  teacherId: string;
  teacherUid: string;
}> = ({inviteKey, teacherId, teacherUid}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [post, setPost] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const router = useRouter();
  const submitHandler = async () => {
    await teacherRef().doc(teacherId).update({
      name,
      email,
      department,
      post,
      number,
      birthday,
      id: teacherId,
      uid: teacherUid,
    });
    router.push('/teacher/welcome');
  };
  return (
    <Layout isTeacher>
      <Box p="10">
        <Heading size="lg" color="#273673">
          基本情報
        </Heading>
        <Divider mt="10" mb="4" />

        <FormControl w="17%">
          <FormLabel>画像</FormLabel>
          <Dropzone inviteKey={inviteKey} isTeacher teacherId={teacherId} />
        </FormControl>
        <Divider my="4" />
        <Box mt="6">
          <HStack spacing="24px">
            {/* <Flex w="90%"> */}
            <FormControl id="email">
              <FormLabel>名前</FormLabel>
              <Input
                onChange={(e) => setName(e.target.value)}
                variant="flushed"
                placeholder="名前"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>メールアドレス</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="メールアドレス"
                variant="flushed"></Input>
            </FormControl>
            {/* </Flex> */}
          </HStack>
          <HStack spacing="24px" mt="10">
            <FormControl id="email">
              <FormLabel>所属</FormLabel>
              <Input
                onChange={(e) => setDepartment(e.target.value)}
                variant="flushed"
                placeholder="テスト園"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>役職</FormLabel>
              <Input
                onChange={(e) => setPost(e.target.value)}
                variant="flushed"
                placeholder="役職"
              />
            </FormControl>
          </HStack>
          <HStack spacing="24px" mt="10">
            <FormControl id="email">
              <FormLabel>電話番号</FormLabel>
              <Input
                onChange={(e) => setNumber(e.target.value)}
                variant="flushed"
                placeholder="電話番号"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>生年月日</FormLabel>
              <Input
                onChange={(e) => setBirthday(e.target.value)}
                variant="flushed"
                placeholder="生年月日"
              />
            </FormControl>
          </HStack>
        </Box>

        <Box mt="20" textAlign="end">
          <Button
            _hover={{background: '#1c2c6e'}}
            background="#273673"
            color="white"
            borderRadius="40"
            px="8"
            onClick={submitHandler}>
            登録する
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};
