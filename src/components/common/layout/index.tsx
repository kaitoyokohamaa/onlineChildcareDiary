import {Header} from './header'
import {Sidebar} from './sidebar'
import {VFC} from 'react'
import {Box, Flex} from '@chakra-ui/layout'

type Props = {children?: React.ReactNode; isHeader?: boolean}

export const Layout: VFC<Props> = ({children, isHeader}) => {
  return (
    <Box>
      <Flex w="100%">
        {/* Sidebar */}
        <Flex h="100vh" bg="#273673">
          <Box>
            <Sidebar />
          </Box>
        </Flex>
        {/* contents */}
        <Flex w="80%">
          <Box w="100%">
            {isHeader && (
              <Box mt="5">
                <Header />
              </Box>
            )}
            <Box>{children}</Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
