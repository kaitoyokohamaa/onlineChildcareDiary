import { VFC } from "react";
import { MdSchool } from "react-icons/md";
import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
export const Pages: VFC = () => {
  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdSchool color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          保育園一覧
        </Text>
      </Flex>
      <Divider mt="5" />
      <Table variant="striped" colorScheme="twitter" _hover={{}}>
        <Thead>
          <Tr>
            <Th>保育園名</Th>
            <Th>住所</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>太陽保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>太陽保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>太陽保育園</Td>
            <Td>東京都北区赤羽台１丁目７−１１</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
