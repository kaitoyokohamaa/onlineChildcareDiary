import { Avator } from "@/components/common/avator";
import {
  Input,
  Box,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { MdSearch } from "react-icons/md";

export const Header = () => {
  return (
    <Box w="100%">
      <Flex justify="space-between">
        <Box w="50%">
          <InputGroup>
            <Input placeholder={"検索"} />
            <InputRightElement>
              <MdSearch size={20} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Flex>
            <Avator />
            <Box pl={2}>
              <Text fontSize="md" fontWeight="bold">
                田中ジョニー
              </Text>
              <Text fontSize="sm">22卒</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
