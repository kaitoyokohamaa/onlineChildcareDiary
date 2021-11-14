import type {AppProps} from 'next/app'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import {UseAuthContext} from '@/contexts/AuthContext'
import {FuegoProvider} from '@nandorojo/swr-firestore'
import {Fuego} from '@/lib/fuego'
import {initalFirebase} from '@/lib/firebase'
function MyApp({Component, pageProps}: AppProps) {
  const fuego = new Fuego(initalFirebase)

  return (
    <FuegoProvider fuego={fuego}>
      <ChakraProvider>
        <CSSReset />
        <UseAuthContext>
          <Component {...pageProps} />
        </UseAuthContext>
      </ChakraProvider>
    </FuegoProvider>
  )
}
export default MyApp
