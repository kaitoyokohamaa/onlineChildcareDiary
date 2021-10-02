import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {Avatar, useColorModeValue, Input, Button, Textarea} from '@chakra-ui/react'

import {useRouter} from 'next/router'
import {useState, useContext, useEffect} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {Dropzone} from '@/components/common/dropzone'
import {userfiledRef} from '@/lib/firestore'
export const Pages = ({user, id}) => {
	const router = useRouter()
	const {dockey} = useContext(AuthContext)
	const [name, setName] = useState<string>()
	const [address, setAddress] = useState<string>()
	const [birthday, setBirthday] = useState<string>()
	const [cellphoneNumber, setCellphoneNumber] = useState<string>()
	const [practicalTraining, setPracticalTraining] = useState<string>()
	const [sex, setSex] = useState<string>()
	const [selfIntroduction, setSelfIntroduction] = useState<string>()
	const [dispayImage, setDispayImage] = useState<string>()
	useEffect(() => {
		setName(user.name)
		setAddress(user.address)
		setBirthday(user.birthday)
		setCellphoneNumber(user.cellphoneNumber)
		setPracticalTraining(user.practicalTraining)
		setSex(user.sex)
		setSelfIntroduction(user.selfIntroduction)
	}, [])
	const submitHandler = async () => {
		console.log(selfIntroduction)
		console.log(name)
		await userfiledRef(id).update({
			name,
			address,
			birthday,
			cellphoneNumber,
			sex,
			selfIntroduction,
			practicalTraining
		})

		router.push(`/profile/${dockey}`)
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
								value={selfIntroduction}
								color={'gray.500'}
								mt="5"
								onChange={(e) => setSelfIntroduction(e.target.value)}
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
						<Input value="東洋大学" fontWeight="bold" color="#273264" mt="2"></Input>
					</Box>
					{/* 性別 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							性別
						</Text>
						<Input
							value={sex}
							fontWeight="bold"
							color="#273264"
							mt="2"
							onChange={(e) => setSex(e.target.value)}
						></Input>
					</Box>
					{/* 生年月日 */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							生年月日
						</Text>
						<Input
							value={birthday}
							fontWeight="bold"
							color="#273264"
							mt="2"
							onChange={(e) => setBirthday(e.target.value)}
						></Input>
					</Box>
					{/* メールアドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							メールアドレス
						</Text>
						<Input
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							fontWeight="bold"
							color="#273264"
							mt="2"
						></Input>
					</Box>
					{/* 電話アドレス */}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							電話番号
						</Text>
						<Input
							value={cellphoneNumber}
							onChange={(e) => setCellphoneNumber(e.target.value)}
							fontWeight="bold"
							color="#273264"
							mt="2"
						></Input>
					</Box>

					{/* 実習先*/}
					<Box pl="12">
						<Text fontWeight="bold" color="#5D5A5A">
							実習先
						</Text>
						<Input
							value={practicalTraining}
							onChange={(e) => setPracticalTraining(e.target.value)}
							fontWeight="bold"
							color="#273264"
							mt="2"
						></Input>
					</Box>
				</Flex>
			</Box>
			<Box textAlign="end">
				<Button background="#F5F5F5" color="#5D5A5A" textAlign="right" mt="10" onClick={submitHandler}>
					プロフィールを保存する
				</Button>
			</Box>
		</Box>
	)
}
