import { Avator } from "@/components/common/avator";
import {
  Input,
  Box,
  Flex,
  Text,
  InputGroup,
  InputRightElement,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { VFC } from "react";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

export const Header: VFC = () => {
  return (
    <Box w="100%" px={16}>
      <Flex justify="space-between">
        <Box w="50%">
          <InputGroup>
            <Input placeholder={"検索"} />
            <InputRightElement>
              <MdSearch size={20} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Menu>
          <MenuButton as={Button} bg="#fff">
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
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/profile">
                <a>プロフィール</a>
              </Link>
            </MenuItem>
            <MenuItem>ログアウト</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
