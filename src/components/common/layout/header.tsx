import {Avatar} from '@/components/common/avator'
import {
  Input,
  Box,
  Flex,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import {VFC, useContext, useEffect} from 'react'
import Link from 'next/link'

import {AuthContext} from '@/contexts/AuthContext'

export const Header: VFC = () => {
  const {loginUser, dockey, displayName, image} = useContext(AuthContext)
  const address = loginUser?.email
  const subName = address?.substring(0, address.indexOf('@'))

  return (
    <Box w="100%" px={16}>
      <Flex justify="space-between">
        <Box w="50%"></Box>
        <Menu>
          <MenuButton as={Button} background="#fff">
            <Box>
              <Flex>
                <Avatar image={image} />
                <Box pl={2}>
                  <Text fontSize="md" fontWeight="bold">
                    {displayName ? displayName : subName}
                  </Text>
                  <Text fontSize="sm">東洋大学</Text>
                </Box>
              </Flex>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href={`/profile/${dockey}`}>
                <a>プロフィール</a>
              </Link>
            </MenuItem>
            <MenuItem>ログアウト</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}
