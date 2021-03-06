import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from '../styles/config'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryCliente } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryCliente}>
      <ChakraProvider theme={theme} >
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
