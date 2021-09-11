import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { MdSchool } from "react-icons/md";
export const Pages = () => {
  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdSchool color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          実習先情報
        </Text>
      </Flex>
      <Divider mt="5" />
      <Box my="10">
        <Text fontSize="xl" fontWeight="bold">
          ひまわり保育園
        </Text>
      </Box>
      <Tabs>
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "#9FD0E8" }}
            border="1px"
            color="#9FD0E8"
            borderColor="#9FD0E8"
            roundedTopRight="md"
            roundedTopLeft="md"
          >
            基本情報
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#9FD0E8" }}
            border="1px"
            color="#9FD0E8"
            borderColor="#9FD0E8"
            roundedTopRight="md"
            roundedTopLeft="md"
          >
            過去の実習生
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#9FD0E8" }}
            border="1px"
            color="#9FD0E8"
            borderColor="#9FD0E8"
            roundedTopRight="md"
            roundedTopLeft="md"
          >
            過去の実習生のクチコミ
          </Tab>
        </TabList>

        <TabPanels border="2px" borderColor="#9FD0E8">
          <TabPanel borderColor="#9FD0E8" p="10">
            <Text fontSize="xl" fontWeight="bold">
              施設概要
            </Text>
            <Divider my="2" />
            <p>住所：東京都北区赤羽台１丁目７−１１</p>
            <p>URL：http://himawari.jp</p>
            <Text fontSize="xl" fontWeight="bold" pt="2">
              保育目標
            </Text>
            <Divider my="2" />
            <Text>心身共に健康で元気に遊べる子ども </Text>
            <Text>自分で考えて行動できる子ども </Text>
            <Text>友だちと仲良く遊び、協力しあえる子ども</Text>
            <Text>やさしく思いやりのある子ども</Text>
            <Text fontSize="xl" fontWeight="bold" pt="2">
              保育園からひとこと
            </Text>
            <Divider my="2" />
            <Text>
              四季を感じられる大きなけやきの木が見守る保育園。家庭的な雰囲気の中で、一人ひとりの育ちを大切に、異年齢や地域の方々とふれあい、人との輪が広がり、みんながホッとできる温かな保育園でありたいと思います。
            </Text>
          </TabPanel>
          <TabPanel>
            <p>住所：東京都北区赤羽台１丁目７−１１</p>
            <p>URL：http://himawari.jp</p>
          </TabPanel>
          <TabPanel>
            <p>住所：東京都北区赤羽台１丁目７−１１</p>
            <p>URL：http://himawari.jp</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
