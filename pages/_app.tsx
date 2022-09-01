import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { AppProps } from 'next/app'



const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }: AppProps) => (
    <CacheProvider value={cache}>
        <Component {...pageProps} />
    </CacheProvider>
)

export default App