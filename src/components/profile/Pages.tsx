import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {Avatar, useColorModeValue, Tag, TagLabel, Button} from '@chakra-ui/react'
import Image from 'next/image'
import {useRouter} from 'next/router'
export const Pages = () => {
	const router = useRouter()
	const editHandler = () => {
		router.push('profile/edit')
	}
	return (
		<Box mt="10" px={16} overflow="scroll" h="85vh">
			<Text
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
								src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
								alt={'Author'}
							/>
							{/* <Text py="2" textAlign="center" fontWeight="bold">
								田中ジョニー
							</Text>
							<Tag size="lg" colorScheme="red" borderRadius="full">
								<TagLabel>22卒</TagLabel>
							</Tag> */}
						</Box>

						<Box pl="5">
							<Heading
								color={useColorModeValue('gray.700', 'white')}
								fontSize={'2xl'}
								fontWeight="bold"
								fontFamily={'body'}
							>
								田中ジョニー
							</Heading>
							<Text color={'gray.500'} pt="2">
								初めまして、自分は都内に通う大学4年生です。最後の実習なので頑張ります。
								最近はBTSにハマってます。
								また、小学校の頃からサッカーを続けており、大学でもサッカー部に所属していました。ポジションはずっとゴールキーパーで、大学時代は守護神と呼ばれていました。
								サッカーでの経験からは、ピッチ全体を後ろから見渡す視野の広さ、状況を観察する冷静さなどを身に付けました。面接では冷静さを活かしながら、本来の実力を発揮してアピールしたいと考えています。本日は、よろしくお願い致します。
							</Text>
						</Box>
					</Flex>
				</Box>
			</Center>
			<Box textAlign="end">
				<Button background="#F5F5F5" color="#5D5A5A" textAlign="right" mt="10" onClick={editHandler}>
					プロフィールを編集する
				</Button>
			</Box>
		</Box>
	)
}
