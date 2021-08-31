import React from "react";
import { MdLocalLibrary } from "react-icons/md";
import { Box, Flex, Heading, HStack, Text, Divider } from "@chakra-ui/layout";
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
    </Box>
  );
};
