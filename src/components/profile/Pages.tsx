import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {Avatar, useColorModeValue, Button} from '@chakra-ui/react'

import {useRouter} from 'next/router'

export const Pages = ({users}) => {
	const router = useRouter()
	const editHandler = () => {
		router.push('profile/edit')
	}

	return (
		<Box mt="10" px={16} overflow="scroll" h="85vh">
			<Text
				fontWeight="bold"
				w="100%"
				fontSize="18px"
				position="relative"
				display="inline-block"
				_after={{
					position: 'absolute',
					top: '50%',
					display: 'inline-block',
					width: '87%',
					height: '1px',
					left: '13%',
					backgroundColor: '#00000029',
					content: '" "'
				}}
			>
				プロフィール
			</Text>

			<Center py={6}>
				<Box
					w="100%"
					bg={useColorModeValue('white', 'gray.900')}
					boxShadow={'2xl'}
					rounded={'2xl'}
					overflow={'hidden'}
					p="14"
				>
					<Flex>
						<Box>
							<Avatar
								size="2xl"
								src={users.image ? users.image : 'https://avatars0.githubusercontent.com/u/1164541?v=4'}
								alt={'Author'}
							/>
						</Box>

						<Box pl="5">
							<Heading
								color={useColorModeValue('gray.700', 'white')}
								fontSize={'2xl'}
								fontWeight="bold"
								fontFamily={'body'}
							>
								{users.name ? users.name : '未記入'}
							</Heading>
							<Text color={'gray.500'} pt="5">
								{users.selfIntroduction ? users.selfIntroduction : '未記入'}
							</Text>
						</Box>
					</Flex>
				</Box>
			</Center>
			<Box
				w="100%"
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				rounded={'2xl'}
				overflow={'hidden'}
				p="14"
			>
				<Flex>
					<Box>
						<Heading
							color={useColorModeValue('gray.700', 'white')}
							fontSize={'2xl'}
							fontWeight="bold"
							fontFamily={'body'}
							mb="10"
						>
							基本情報
						</Heading>
					</Box>
				</Flex>
				<Flex>
					{/* 大学名 */}
					<Box>
						<Text fontWeight="bold" color="#5D5A5A">
							大学
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							東洋大学
						</Text>
					</Box>
					{/* 性別 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							性別
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							{users.sex ? users.sex : '未記入'}
						</Text>
					</Box>
					{/* 生年月日 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							生年月日
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							{users.birthday ? users.birthday : '未記入'}
						</Text>
					</Box>
					{/* メールアドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							メールアドレス
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							{users.address ? users.address : '未記入'}
						</Text>
					</Box>
					{/* 電話アドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							電話
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							{users.cellphoneNumber ? users.cellphoneNumber : '未記入'}
						</Text>
					</Box>

					{/* 実習先*/}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							実習先
						</Text>
						<Text fontWeight="bold" color="#273264" pt="2">
							{users.practicalTraining ? users.practicalTraining : '未記入'}
						</Text>
					</Box>
				</Flex>
			</Box>
			<Box textAlign="end">
				<Button background="#F5F5F5" color="#5D5A5A" textAlign="right" mt="10" onClick={editHandler}>
					プロフィールを編集する
				</Button>
			</Box>
		</Box>
	)
}
