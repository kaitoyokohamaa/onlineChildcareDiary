import {VFC} from 'react'

import {Avatar as ChakraAvatar} from '@chakra-ui/react'
export const Avatar: VFC<{image: string}> = ({image}) => {
	return <ChakraAvatar borderRadius="full"  width={38} height={38} src={image} />
}
