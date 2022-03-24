import '../styles/app.sass'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RootStore } from '../stores/RootStore'
import { Provider } from 'inversify-react'
import { ModalsContainer, ModalsEnum } from '../modals'

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
            <ModalsContainer />
        </Provider>
    )
}

export default MyApp
