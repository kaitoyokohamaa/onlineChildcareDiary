import React from 'react'
import dynamic from 'next/dynamic'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'

const PDF = dynamic(() => import('./pdf').then((mod) => mod.Pdf), {ssr: false})
export const Pages = () => {
	return (
		<div>
			<Flex alignItems="center">
				<Box bg="#F8F8F8" p="2" borderRadius="md">
					<MdLocalLibrary color=" #9FD0E8" />
				</Box>
				<Text pl="8" fontWeight="bold">
					日誌
				</Text>
			</Flex>
			<Divider mt="5" />
			<PDF />
		</div>
	)
}
