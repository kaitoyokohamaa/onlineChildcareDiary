import { VFC } from "react";
import { Button } from "components/common/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";

export const Sidebar: VFC = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Heading as="h5" size="md" color="white">
          SMART DIARY PHOENIX
        </Heading>
      </Box>
      <Box>
        <Button>日誌登録</Button>
      </Box>
      <Box>
        <Button>日誌登録</Button>
      </Box>
      <Box>
        <Button>日誌登録</Button>
      </Box>
    </Box>
  );
};
