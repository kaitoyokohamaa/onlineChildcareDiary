import {Header} from './header';
import {Sidebar} from './sidebar';
import {VFC} from 'react';
import {Box, Flex, HStack} from '@chakra-ui/layout';

type Props = {
  children?: React.ReactNode;
  isTeacher?: boolean;
};

export const Layout: VFC<Props> = ({children, isTeacher}) => {
  return (
    <Box w="100%">
      <HStack m={0}>
        {/* Sidebar */}
        <Box w="25%">
          <Sidebar isTeacher={isTeacher} />
        </Box>
        {/* contents */}
        <Box w="100%">
          <Box ml={-2} w="100%">
            {children}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};
