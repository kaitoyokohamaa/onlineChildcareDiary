import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {Avatar, useColorModeValue, Input, Button, Textarea} from '@chakra-ui/react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useContext, useState} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {Dropzone} from '@/components/common/dropzone'
export const Pages = () => {
	const router = useRouter()
	const {loginUser} = useContext(AuthContext)
	const address = loginUser?.email
	const subName = address?.substring(0, address.indexOf('@'))
	const [name, setName] = useState<string>(subName)
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
				プロフィール編集
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
							<Dropzone />
						</Box>

						<Box w="90%" pl="5">
							<Input
								value={name}
								color={useColorModeValue('gray.700', 'white')}
								fontSize={'2xl'}
								fontWeight="bold"
								fontFamily={'body'}
								onChange={(e) => setName(e.target.value)}
							></Input>
							<Textarea
								w="full"
								rows={10}
								value="初めまして、自分は都内に通う大学4年生です。最後の実習なので頑張ります。
								最近はBTSにハマってます。
								また、小学校の頃からサッカーを続けており、大学でもサッカー部に所属していました。ポジションはずっとゴールキーパーで、大学時代は守護神と呼ばれていました。
								サッカーでの経験からは、ピッチ全体を後ろから見渡す視野の広さ、状況を観察する冷静さなどを身に付けました。面接では冷静さを活かしながら、本来の実力を発揮してアピールしたいと考えています。本日は、よろしくお願い致します。"
								color={'gray.500'}
								mt="5"
							></Textarea>
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
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
					{/* 性別 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							性別
						</Text>
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
					{/* 生年月日 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							生年月日
						</Text>
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
					{/* メールアドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							メールアドレス
						</Text>
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
					{/* 電話アドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							電話
						</Text>
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>

					{/* 過去の実習先(あれば)*/}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							過去の実習先
						</Text>
						<Input fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
				</Flex>
			</Box>
			<Box textAlign="end">
				<Button background="#F5F5F5" color="#5D5A5A" textAlign="right" mt="10">
					プロフィールを保存する
				</Button>
			</Box>
		</Box>
	)
}
