import { VFC } from "react";
import Link from "next/link";
import { Button_ } from "@/components/common/button";
import { SidebarLink } from "./sidebarLink";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import {
  MdLocalLibrary,
  MdSchool,
  MdChatBubble,
  MdLocalPostOffice,
} from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { VscGear } from "react-icons/vsc";
import { useRouter } from "next/router";

export const Sidebar: VFC = () => {
  const router = useRouter();

  return (
    <Box w="100%" px={4}>
      <Box textAlign="center">
        <Heading as="h5" size="md" color="white" mt={10}>
          SMART DIARY PHOENIX
        </Heading>
      </Box>
      <Box textAlign="center" my={8}>
        <Button_ bg="#9FD0E8" color="white" _hover={{ bg: "#54b5e4" }}>
          <Link href="register">
            <a>＋日誌登録</a>
          </Link>
        </Button_>
      </Box>
      <Box
        py={4}
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
        borderLeft={router.asPath === "/post" && "4px"}
        borderColor={router.asPath === "/post" && "#56A9D3"}
        bg={
          router.asPath === "/post" && "#FFFFFF1A 0% 0% no-repeat padding-box"
        }
      >
        <SidebarLink color={router.asPath === "/psot" ? "#84B9D4" : "white"}>
          <Link href="/post">
            <a>
              <Flex justify="center" mx={router.asPath === "/post" && -1.5}>
                <HStack w="50%">
                  <MdLocalPostOffice size={20} />
                  <Text>投稿一覧</Text>
                </HStack>
              </Flex>
            </a>
          </Link>
        </SidebarLink>
      </Box>
      <Box
        py={4}
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
        borderLeft={router.asPath === "/diary" && "4px"}
        borderColor={router.asPath === "/diary" && "#56A9D3"}
        bg={
          router.asPath === "/diary" && "#FFFFFF1A 0% 0% no-repeat padding-box"
        }
      >
        <SidebarLink color={router.asPath === "/diary" ? "#84B9D4" : "white"}>
          <Link href="/diary">
            <a>
              <Flex justify="center" mx={router.asPath === "/diary" && -1.5}>
                <HStack w="50%">
                  <MdLocalLibrary size={20} />
                  <Text>日誌一覧</Text>
                </HStack>
              </Flex>
            </a>
          </Link>
        </SidebarLink>
      </Box>
      <Box
        py={4}
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
        borderLeft={router.asPath === "/school" && "4px"}
        borderColor={router.asPath === "/school" && "#56A9D3"}
        bg={
          router.asPath === "/school" && "#FFFFFF1A 0% 0% no-repeat padding-box"
        }
      >
        <SidebarLink color={router.asPath === "/school" ? "#84B9D4" : "white"}>
          <Link href="/school">
            <a>
              <Flex justify="center" mx={router.asPath === "/school" && -1.5}>
                <HStack w="50%">
                  <MdSchool size={20} />
                  <Text>保育園一覧</Text>
                </HStack>
              </Flex>
            </a>
          </Link>
        </SidebarLink>
      </Box>
      <Box
        py={4}
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
        borderLeft={router.asPath === "/chat" && "4px"}
        borderColor={router.asPath === "/chat" && "#56A9D3"}
        bg={
          router.asPath === "/chat" && "#FFFFFF1A 0% 0% no-repeat padding-box"
        }
      >
        <SidebarLink color={router.asPath === "/chat" ? "#84B9D4" : "white"}>
          <Link href="/chat">
            <a>
              <Flex justify="center" mx={router.asPath === "/chat" && -1.5}>
                <HStack w="50%">
                  <MdChatBubble size={20} />
                  <Text>チャット</Text>
                </HStack>
              </Flex>
            </a>
          </Link>
        </SidebarLink>
      </Box>
      <Box
        py={router.asPath === "/edit" ? -4 : 4}
        _hover={{ bg: "#FFFFFF1A 0% 0% no-repeat padding-box" }}
        borderLeft={router.asPath === "/edit" && "4px"}
        borderColor={router.asPath === "/edit" && "#56A9D3"}
        bg={
          router.asPath === "/edit" && "#FFFFFF1A 0% 0% no-repeat padding-box"
        }
      >
        <SidebarLink color={router.asPath === "/edit" ? "#84B9D4" : "white"}>
          <Link href="/edit">
            <a>
              <Flex justify="center" mx={router.asPath === "/edit" && -1.5}>
                <HStack w="50%">
                  <VscGear size={20} />
                  <Text>設定</Text>
                </HStack>
              </Flex>
            </a>
          </Link>
        </SidebarLink>
      </Box>
      <Box
        py={4}
        bottom={-250}
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
