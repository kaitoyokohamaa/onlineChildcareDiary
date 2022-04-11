import {VFC} from 'react';
import Link from 'next/link';
import {Layout} from '@/components/common/layout';
import {Home} from '@/models/user/home';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
export const Pages: VFC<Home> = ({}) => {
  return (
    <Layout>
      <Box>
        <Flex alignItems="center">
          <Text ml="7" fontWeight="bold">
            社員のストレス値
          </Text>
        </Flex>
      </Box>
      <Box mx="10px">
        <Table>
          <Thead>
            <Tr>
              <Th>名前</Th>
              <Th>今のストレス状態</Th>
              <Th>必要なアクション</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>横浜海斗</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>{' '}
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>服部半蔵</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>{' '}
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>横浜流星</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>{' '}
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>菅田将暉</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>{' '}
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>有村架純</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>井上尚弥</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>マニーパッキャオ</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>中川大志</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>佐々木拓</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>新垣結衣</a>
                </Link>
              </Td>
              <Td color="#273673">絶好調</Td>
              <Td color="#273673">特になし</Td>
            </Tr>
            <Tr
              _hover={{
                background: '#f5f7f9',
                p: '14',
              }}>
              <Td color="#273673" fontWeight="bold" cursor="pointer">
                <Link href="">
                  <a>アーノルドシュワルツェネッガー</a>
                </Link>
              </Td>
              <Td color="red">かなり悪い</Td>
              <Td color="#273673">休みが必要です</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
};
