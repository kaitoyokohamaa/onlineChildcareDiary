import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Input, Link as Links } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
export const Pages = () => {
  return (
    <Box>
      <Flex>
        <Flex h="100vh" bg="#273673" w="50%" pt="25%" pl="3">
          <Box>
            <Heading as="h3" size="lg" color="white" mb={5}>
              保育実習生のためのオンライン日誌
            </Heading>
          </Box>
        </Flex>

        <Flex w="50%" pt="15%" justify="center">
          <Box>
            <Flex align="center">
              <Box w="10%">
                <img src="img/phoenix.png" />
              </Box>
              <Box textAlign="center">
                <Heading as="h5" size="md" color="#273673">
                  SMART DIARY PHOENIX
                </Heading>
              </Box>
            </Flex>
            <Box my={10}>
              <label>メールアドレス</label>
              <Input />
            </Box>
            <Box my={10}>
              <label>パスワード</label>
              <Input />
            </Box>
            <Box>
              <Button
                colorScheme="blue"
                bg="#273673"
                size="lg"
                px="40"
                py={{ lg: 8 }}
                boxShadow="2xl-blue"
                mb={10}
              >
                サインイン
              </Button>
            </Box>
            <Box textAlign="center">
              初めてのログインはこちら
              <Link href="/signup">
                <Links color="blue.500">新規登録</Links>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
