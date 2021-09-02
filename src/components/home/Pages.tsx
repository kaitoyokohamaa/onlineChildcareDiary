import React from "react";
import { Box, Flex, Heading, HStack, Text, Divider } from "@chakra-ui/layout";
import { MdLocalLibrary } from "react-icons/md";
import Link from "next/link";
export const Pages = () => {
  return (
    <Box>
      <Box mt={10}>
        <Text fontWeight="bold">新規作成</Text>
      </Box>
      <Divider my="4" />
      <Box w="100%">
        <Box>
          <Box
            _hover={{ backgroundColor: "#F8F8F8" }}
            w="20%"
            backgroundColor="#F9FBFB"
            p="24px"
            borderRadius="md"
            alignItems="center"
            border="2px solid #e4eaf1"
            boxSizing="border-box"
            textAlign="center"
          >
            <Box display="flex" justifyContent="center">
              <MdLocalLibrary size="70" color=" #9FD0E8" />
            </Box>
            <Box>
              <Text fontWeight="bold" pt="4">
                日誌登録
              </Text>
            </Box>
          </Box>
        </Box>
        <Box mt={10}>
          <Text fontWeight="bold">一覧</Text>
        </Box>
        <Divider my="4" />
        <Box w="100%">
          <Flex>
            <Box>
              <Link href="/diary">
                <a>
                  <Box
                    _hover={{ backgroundColor: "#F8F8F8" }}
                    w="152px"
                    backgroundColor="#F9FBFB"
                    p="14px"
                    borderRadius="md"
                    alignItems="center"
                    border="2px solid #e4eaf1"
                    boxSizing="border-box"
                    textAlign="center"
                  >
                    <Box>
                      <Text fontWeight="bold">日誌一覧</Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/school">
                <a>
                  <Box
                    ml={"10"}
                    _hover={{ backgroundColor: "#F8F8F8" }}
                    w="152px"
                    backgroundColor="#F9FBFB"
                    p="14px"
                    borderRadius="md"
                    alignItems="center"
                    border="2px solid #e4eaf1"
                    boxSizing="border-box"
                    textAlign="center"
                  >
                    <Box>
                      <Text fontWeight="bold">保育園一覧</Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};