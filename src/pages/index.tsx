import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import React from "react";

export default function Index() {
  return (
    <Box>
      <Flex>
        <Flex h="100vh" bg="blue.400" w="50%" pt="25%" pl="3">
          <Box>
            <Heading as="h3" size="lg" color="white" mb={5}>
              保育実習生のためのオンライン日誌
            </Heading>
          </Box>
        </Flex>

        <Flex className="right" w="50%" pt="15%" justify="center">
          <Box>
            <Flex align="center">
              <Box w="10%">
                <img src="img/phoenix.png" />
              </Box>
              <Box textAlign="center">
                <Heading as="h5" size="md" color="blue.400">
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
                size="lg"
                px="40"
                py={{ lg: 8 }}
                boxShadow="2xl-blue"
                mb={10}
              >
                サインイン
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
