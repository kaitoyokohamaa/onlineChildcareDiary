import type {AppProps} from 'next/app'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import {UseAuthContext} from '@/contexts/AuthContext'
function MyApp({Component, pageProps}: AppProps) {
	return (
		<ChakraProvider>
			<CSSReset />
			<UseAuthContext>
				<Component {...pageProps} />
			</UseAuthContext>
		</ChakraProvider>
	)
}
export default MyApp
