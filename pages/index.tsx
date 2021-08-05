import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Box minH="100vh">
      <Flex
        className="container"
        alignItems="center"
        bgColor="blue"
        h="100vh"
        justifyContent={{ base: "center", lg: "space-around" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex
          className="left"
          mb={{ base: "20", lg: "0" }}
          px={{ base: "10", lg: "0" }}
        >
          <Box>
            <Heading as="h3" color="white" mb={5}>
              東洋大学保育実習生のためのオンライン日誌
            </Heading>
          </Box>
        </Flex>

        <Box className="right" textAlign="center">
          <Flex flexDir={{ base: "column", lg: "row" }}>
            <Input /> <Input />
            <a href="http://localhost:4000/api/authentication/google/start">
              <Button
                colorScheme="blue"
                size="lg"
                px="10"
                py={{ lg: 8 }}
                boxShadow="2xl-blue"
                mb={10}
              >
                サインイン
              </Button>
            </a>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
