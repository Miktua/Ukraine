import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RootStore } from '../stores/RootStore'
import { Provider } from 'inversify-react'
import { useStore } from '../stores/RootStore'

function MyApp({ Component, pageProps }: AppProps) {
    const rootStore = new RootStore()
    const container = rootStore.container
    // console.log(`store`, store)

    return (
        <Provider container={container}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
