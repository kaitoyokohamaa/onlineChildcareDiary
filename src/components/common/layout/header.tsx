import {Avator} from '@/components/common/avator'
import {Input, Box, Flex, Text, Menu, Button, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import {VFC, useContext} from 'react'
import Link from 'next/link'
import {MdSearch} from 'react-icons/md'
import {AuthContext} from '@/contexts/AuthContext'
export const Header: VFC = () => {
	const {loginUser} = useContext(AuthContext)
	const address = loginUser?.email
	const subName = address.substr(1, 11)
	return (
		<Box w="100%" px={16}>
			<Flex justify="space-between">
				<Box w="50%"></Box>
				<Menu>
					<MenuButton as={Button} bg="#fff">
						<Box>
							<Flex>
								<Avator />
								<Box pl={2}>
									<Text fontSize="md" fontWeight="bold">
										{subName}
									</Text>
									<Text fontSize="sm">東洋大学</Text>
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
	)
}
