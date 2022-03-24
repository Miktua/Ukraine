import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RootStore } from '../stores/RootStore'
import { Provider } from 'inversify-react'

const rootStore = new RootStore()
const container = rootStore.container

function MyApp({ Component, pageProps }: AppProps) {
    

    // try reconnect to web3
    useEffect(() => {
        rootStore.walletStore.tryReconnect()
    }, [])

    return (
        <Provider container={container}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
