import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { Input, Textarea, Button } from "@chakra-ui/react";
import { Cell } from "./cell";
import { DiaryTabel } from "./diaryTabel";
export const Pages = () => {
  return (
    <Box mt="10" px={16}>
      <Text pl="8" fontWeight="bold">
        日誌登録
      </Text>
      <Divider mt="5" />
      <Box overflow="scroll" h="79vh">
        <Box my="8">
          <Text fontWeight="bold">日付／名前</Text>
          <Flex mt="2">
            <Input placeholder="第何日目" />
            <Input placeholder="日付" ml="10" />
            <Input placeholder="実習生氏名" ml="10" />
          </Flex>
        </Box>
        <Box my="8">
          <Text fontWeight="bold">配属先/指導者</Text>
          <Flex mt="2">
            <Input placeholder="配属先" />
            <Input placeholder="指導者名" ml="10" />
          </Flex>
        </Box>
        <Box my="8">
          <Text fontWeight="bold">本日の目標</Text>
          <Flex mt="2">
            <Textarea placeholder="本日の目標" />
          </Flex>
        </Box>
        <Box my="8">
          <Text fontWeight="bold">実習内容</Text>
          <DiaryTabel />
        </Box>
        <Box my="8">
          <Flex w="100%" mt="2" gap={6}>
            <Box textAlign="right" w="100%" p="10">
              <Button
                w="32"
                ml="3"
                bg="#9FD0E8"
                color="#fff"
                _hover={{ bg: "##9FD0E8" }}
              >
                + 行を追加
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box my="8">
          <Text fontWeight="bold">
            実習所感(特に印象に残ったこと、考察、課題、反省など)
          </Text>
          <Flex mt="2">
            <Textarea placeholder="本日の目標" />
          </Flex>
        </Box>

        <Box my="8">
          <Flex w="100%" mt="2" gap={6}>
            <Box
              textAlign="right"
              w="100%"
              bg="#FCFCFC 0% 0% no-repeat padding-box;"
              p="10"
            >
              <Button
                ml="3"
                w="32"
                variant="outline"
                colorScheme="blue"
                border="1px"
                borderColor="#273264"
                bg="#fff"
                color="#273264"
              >
                一時保存
              </Button>
              <Button
                w="32"
                ml="3"
                bg="#273264"
                color="#fff"
                _hover={{ bg: "#141933" }}
              >
                完了
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
