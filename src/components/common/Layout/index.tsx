import { Sidebar } from "./sidebar";
import { VFC } from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
type Props = { children?: React.ReactNode };
export const Layout: VFC<Props> = ({ children }) => {
  return (
    <Box>
      <Flex>
        <Flex h="100vh" bg="#273673">
          <Box>
            <Sidebar />
          </Box>
        </Flex>
        <Flex w="50%" pl="3">
          <Box>{children}</Box>
        </Flex>
      </Flex>
    </Box>
  );
};
