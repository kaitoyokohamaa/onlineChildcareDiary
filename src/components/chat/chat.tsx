import { Fragment, VFC } from "react";

import { Box, Flex, Text } from "@chakra-ui/layout";

export const Chat: VFC = () => {
  return (
    <Fragment>
      <Box w="43%" bgColor="#E9E9E9" p="3">
        <Text>
          こんにちは。斉藤と申します。<br></br>
          日誌の提出はこちらでお願いします。明日もよろしくお願いします。
        </Text>
      </Box>
      <Box w="43%" bgColor="#E9E9E9" p="3" mt="4">
        <Text>また、不明な点がありましたら気軽にお尋ねください！</Text>
      </Box>
      <Box w="100%">
        <Flex justifyContent="flex-end">
          <Box w="43%" bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text>お疲れ様です！ こちら本日分の日誌です。</Text>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end">
          <Box w="43%" bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text>お疲れ様です！ こちら本日分の日誌です。</Text>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end">
          <Box w="43%" bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text>お疲れ様です！ こちら本日分の日誌です。</Text>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end">
          <Box w="43%" bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text>お疲れ様です！ こちら本日分の日誌です。</Text>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end">
          <Box w="43%" bgColor="#56A9D3" color="#fff" p="3" mt="4">
            <Text>また、不明な点がありましたら気軽にお尋ねください！</Text>
          </Box>
        </Flex>
      </Box>
      <Box w="43%" bgColor="#E9E9E9" p="3" mt="4">
        <Text>
          本日の日誌確認しました。 慣れない現場で大変だったと思います。
          ゆっくり休んでください！ お疲れ様でした
        </Text>
      </Box>
      <Box w="43%" bgColor="#E9E9E9" p="3" mt="4">
        <Text>
          本日の日誌確認しました。 慣れない現場で大変だったと思います。
          ゆっくり休んでください！ お疲れ様でした
        </Text>
      </Box>
    </Fragment>
  );
};
