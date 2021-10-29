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
  MenuItem,
  AvatarBadge,
} from '@chakra-ui/react'
import {VFC, useContext} from 'react'
import Link from 'next/link'

import {AuthContext} from '@/contexts/AuthContext'
import {MdNotifications} from 'react-icons/md'
export const Header: VFC = () => {
  const {loginUser, dockey, displayName, image} = useContext(AuthContext)
  const address = loginUser?.email
  const subName = address?.substring(0, address.indexOf('@'))

  return (
    <Box w="100%" px={16}>
      <Flex justify="flex-end" alignItems="center">
        <MdNotifications
          cursor="pointer"
          color="#263773"
          size={30}
        ></MdNotifications>
        <Menu>
          <MenuButton as={Button} background="#fff">
            <Box>
              <Flex justifyItems="center" alignItems="center">
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
              <Link href={`user/profile/${dockey}`}>
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
