import { Box, Flex, Center, Heading, Text, Stack } from "@chakra-ui/layout";
import {
  Avatar,
  useColorModeValue,
  Divider,
  Tag,
  TagLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Image from "next/image";
export const Pages = () => {
  return (
    <Box mt="10" px={16} overflow="scroll" h="85vh">
      <Text
        w="100%"
        fontSize="18px"
        position="relative"
        display="inline-block"
        _after={{
          position: "absolute",
          top: "50%",
          display: "inline-block",
          width: "87%",
          height: "1px",
          left: "13%",
          backgroundColor: "#00000029",
          content: '" "',
        }}
      >
        プロフィール
      </Text>
      <Center py={6}>
        <Box
          w="100%"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Flex>
            <Box m="10">
              <Avatar
                size="xl"
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              />
              <Text py="2" textAlign="center" fontWeight="bold">
                田中ジョニー
              </Text>
              <Tag size="lg" colorScheme="red" borderRadius="full">
                <TagLabel>22卒</TagLabel>
              </Tag>
            </Box>

            <Box borderLeft="1px" pl="10" borderColor="#00000029">
              <Heading
                mt="10"
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontWeight="bold"
                fontFamily={"body"}
              >
                自己紹介
              </Heading>
              <Text color={"gray.500"} pr="10" pt="4">
                初めまして、自分は都内に通う大学4年生です。最後の実習なので頑張ります。
                最近はBTSにハマってます。
                また、小学校の頃からサッカーを続けており、大学でもサッカー部に所属していました。ポジションはずっとゴールキーパーで、大学時代は守護神と呼ばれていました。
                サッカーでの経験からは、ピッチ全体を後ろから見渡す視野の広さ、状況を観察する冷静さなどを身に付けました。面接では冷静さを活かしながら、本来の実力を発揮してアピールしたいと考えています。本日は、よろしくお願い致します。
              </Text>
            </Box>
          </Flex>
        </Box>
      </Center>{" "}
      <Box>
        <Tabs>
          <TabList>
            <Tab>ツイート</Tab>
            <Tab>田中ジョニーの日誌</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>今日も実習疲れたなー</p>
            </TabPanel>
            <TabPanel>
              <Table variant="striped" colorScheme="twitter">
                <Thead>
                  <Tr>
                    <Th>保育園名</Th>
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
                        <Td>ひまわり保育園</Td>
                        <Td>2021/09/31</Td>
                        <Td isNumeric>詳細</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
