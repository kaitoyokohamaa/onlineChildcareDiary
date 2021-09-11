import { VFC } from "react";
import { MdLocalLibrary } from "react-icons/md";
import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Link from "next/link";
export const Pages: VFC = () => {
  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdLocalLibrary color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          日誌一覧
        </Text>
      </Flex>
      <Divider mt="5" />
      <Table variant="striped" colorScheme="twitter">
        <Thead>
          <Tr>
            <Th>日付</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(10)].map(() => {
            return (
              <Tr
                _hover={{
                  boxShadow: "dark-lg",
                  p: "14",
                }}
              >
                <Td>2021/09/31(第1週目)</Td>
                <Td isNumeric>詳細</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
