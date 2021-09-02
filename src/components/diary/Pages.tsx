import React from "react";
import { MdLocalLibrary } from "react-icons/md";
import { Box, Flex, Heading, HStack, Text, Divider } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
export const Pages = () => {
  return (
    <Box mt="10">
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdLocalLibrary color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          日誌一覧
        </Text>
      </Flex>
      <Divider mt="5" />
      <Table variant="striped" colorScheme="twitter" _hover={{}}>
        <Thead>
          <Tr>
            <Th>保育園名</Th>
            <Th>日付</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
          <Tr>
            <Td>ひまわり保育園</Td>
            <Td>2021/09/31</Td>
            <Td isNumeric>詳しくみる</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
