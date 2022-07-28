import {VFC} from 'react';
import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout';
import {
  Select,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import {EditUser} from '@/models/user';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import {Dropzone} from '@/components/common/dropzone';
import {userfiledRef} from '@/lib/firestore';
import {Layout} from '@/components/common/layout';
import {User} from '@/models/user';
export const Pages: VFC<EditUser> = ({id}) => {
  const router = useRouter();

  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [birthday, setBirthday] = useState<string>();
  const [cellphoneNumber, setCellphoneNumber] = useState<string>();
  const [practicalTraining, setPracticalTraining] = useState<string>();
  const [sex, setSex] = useState<string>();
  const [selfIntroduction, setSelfIntroduction] = useState<string>();
  const [dispayImage, setDispayImage] = useState<string>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    setName(user?.name);
    setAddress(user?.address);
    setBirthday(user?.birthday);
    setCellphoneNumber(user?.cellphoneNumber);
    setPracticalTraining(user?.practicalTraining);
    setSex(user?.sex);
    setSelfIntroduction(user?.selfIntroduction);
    setDispayImage(user?.dispayImage);
  }, [user]);

  useEffect(() => {
    userfiledRef(id).onSnapshot((res) => {
      let data = null;
      data = res.data();
      setUser(data);
    });
  }, [id]);
  const submitHandler = async () => {
    await userfiledRef(id).update({
      name,
      address,
      birthday,
      cellphoneNumber,
      sex,
      selfIntroduction,
      practicalTraining,
    });

    router.push(`/user/profile/${id}`);
  };
  return (
    <Layout>
      <Box mt="10" px={16} overflow="scroll" h="85vh">
        <Text
          fontWeight="bold"
          w="100%"
          fontSize="18px"
          position="relative"
          display="inline-block"
          _after={{
            position: 'absolute',
            top: '50%',
            display: 'inline-block',
            width: '87%',
            height: '1px',
            left: '13%',
            backgroundColor: '#00000029',
            content: '" "',
          }}>
          プロフィール編集
        </Text>

        <Center py={6}>
          <Box
            w="100%"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'2xl'}
            overflow={'hidden'}
            p="14">
            <Flex>
              <Box>
                <Dropzone />
              </Box>

              <Box w="90%" pl="5">
                <Input
                  value={name}
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontWeight="bold"
                  fontFamily={'body'}
                  onChange={(e) => setName(e.target.value)}></Input>
                <Textarea
                  w="full"
                  rows={10}
                  value={selfIntroduction}
                  color={'gray.500'}
                  mt="5"
                  onChange={(e) =>
                    setSelfIntroduction(e.target.value)
                  }></Textarea>
              </Box>
            </Flex>
          </Box>
        </Center>
        <Box
          w="100%"
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'2xl'}
          overflow={'hidden'}
          p="14">
          <Flex>
            <Box>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontWeight="bold"
                fontFamily={'body'}
                mb="10">
                基本情報
              </Heading>
            </Box>
          </Flex>
          <Flex>
            {/* 性別 */}
            <FormControl w="20%">
              <FormLabel fontWeight="bold" color="#5D5A5A">
                性別
              </FormLabel>
              <Select
                fontWeight="bold"
                color="#273673"
                pt="2"
                onChange={(e) => setSex(e.target.value)}>
                <option value="">選んでください</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </Select>
            </FormControl>
            {/* 生年月日 */}
            <FormControl pl="4" w="20%">
              <FormLabel fontWeight="bold" color="#5D5A5A">
                生年月日
              </FormLabel>
              <Input
                value={birthday}
                type="date"
                fontWeight="bold"
                color="#273673"
                mt="2"
                onChange={(e) => setBirthday(e.target.value)}></Input>
            </FormControl>
            {/* メールアドレス */}
            <FormControl pl="4" w="20%">
              <FormLabel fontWeight="bold" color="#5D5A5A">
                メールアドレス
              </FormLabel>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fontWeight="bold"
                color="#273673"
                mt="2"
                w="full"></Input>
            </FormControl>
          </Flex>
          <Flex mt="10">
            {/* 電話アドレス */}
            <FormControl w="20%">
              <FormLabel fontWeight="bold" color="#5D5A5A">
                電話番号
              </FormLabel>
              <Input
                type="tel"
                value={cellphoneNumber}
                onChange={(e) => setCellphoneNumber(e.target.value)}
                fontWeight="bold"
                color="#273673"
                mt="2"></Input>
            </FormControl>

            {/* 実習先*/}
            <FormControl pl="4" w="20%">
              <FormLabel fontWeight="bold" color="#5D5A5A">
                配属先
              </FormLabel>
              <Input
                value={practicalTraining}
                onChange={(e) => setPracticalTraining(e.target.value)}
                fontWeight="bold"
                color="#273673"
                mt="2"></Input>
            </FormControl>
          </Flex>
        </Box>
        <Box textAlign="end">
          <Button
            background="#263773"
            color="#fff"
            _hover={{background: '#1c2956'}}
            textAlign="right"
            mt="10"
            mb="10"
            onClick={submitHandler}>
            プロフィールを保存する
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};
