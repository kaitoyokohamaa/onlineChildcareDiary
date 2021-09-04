import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { VFC } from "react";
import { Box, Flex } from "@chakra-ui/layout";

type Props = { children?: React.ReactNode };

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <Box>
      <Flex w="100%">
        {/* Sidebar */}
        <Flex w="20%" h="100vh" bg="#273673">
          <Box>
            <Sidebar />
          </Box>
        </Flex>
        {/* contents */}
        <Flex w="80%" px={16}>
          <Box w="100%">
            <Box mt="10">
              <Header />
            </Box>
            <Box>{children}</Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
