import {Box, Flex, Center, Heading, Text} from '@chakra-ui/layout'
import {
	Avatar,
	useColorModeValue,
	Tag,
	TagLabel,
	Button,
	FormErrorMessage,
	FormLabel,
	FormControl,
	Textarea,
	Input,
	Image
} from '@chakra-ui/react'
// import Image from 'next/image'
import {useRouter} from 'next/router'
export const Pages = () => {
	return (
		<Box overflow="scroll" h="90vh">
			<Box mt="10" px={16} overflow="scroll" h="90vh">
				<Text
					w="100%"
					fontSize="18px"
					position="relative"
					display="inline-block"
					_after={{
						position: 'absolute',
						top: '50%',
						display: 'inline-block',
						width: '83%',
						height: '1px',
						left: '17%',
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
						rounded={'md'}
						overflow={'hidden'}
					>
						<Flex justifyContent="center">
							<Box m="10">
								<Image
									textAlign="center"
									borderRadius="full"
									src="gibbresh.png"
									fallbackSrc="https://via.placeholder.com/150"
								/>
								<Box mt="4">
									<FormLabel>名前</FormLabel>
									<Input w="100%"></Input>
								</Box>
							</Box>

							<Box borderLeft="1px" pl="10" borderColor="#00000029" w="70%">
								<Heading
									mt="10"
									color={useColorModeValue('gray.700', 'white')}
									fontSize={'2xl'}
									fontWeight="bold"
									fontFamily={'body'}
								>
									自己紹介
								</Heading>
								<Textarea
									mt="9"
									row="4"
									color={'gray.500'}
									placeholder="Here is a sample placeholder"
									isFullWidth
								></Textarea>
								<Box textAlign="end"></Box>
							</Box>
						</Flex>
					</Box>
				</Center>

				<Box
					w="100%"
					bg={useColorModeValue('white', 'gray.900')}
					boxShadow={'2xl'}
					rounded={'md'}
					overflow={'hidden'}
				>
					<Flex>
						<Box m="10"></Box>
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}
