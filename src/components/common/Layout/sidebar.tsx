import { VFC } from "react";
import { Button_ } from "components/common/button";
import { SidebarLink } from "components/common/Layout/sidebarLink";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { MdLocalLibrary, MdSchool, MdEdit, MdChatBubble } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { VscGear } from "react-icons/vsc";
export const Sidebar: VFC = () => {
  return (
    <Box w="100%" px={4}>
      <Box textAlign="center">
        <Heading as="h5" size="md" color="white" mt={10}>
          SMART DIARY PHOENIX
        </Heading>
      </Box>
      <Box textAlign="center" my={8}>
        <Button_ bg="#9FD0E8" color="white" _hover={{ bg: "#54b5e4" }}>
          ＋日誌登録
        </Button_>
      </Box>
      <Box py={4} _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}>
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <MdLocalLibrary size={20} />
              <Text>日誌一覧</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
      <Box py={4} _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}>
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <MdSchool size={20} />
              <Text>保育園一覧</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
      <Box py={4} _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}>
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <MdChatBubble size={20} />
              <Text>チャット</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
      <Box py={4} _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}>
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <VscGear size={20} />
              <Text>設定</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
      <Box
        py={4}
        bottom={-350}
        position="relative"
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
      >
        <SidebarLink color="white">
          <Flex justify="center">
            <HStack w="50%">
              <IoLogOut size={20} />
              <Text>ログアウト</Text>
            </HStack>
          </Flex>
        </SidebarLink>
      </Box>
    </Box>
  );
};
