import { inject } from 'inversify'
import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CardLink } from '../components/card-link'
import { UserStore } from '../stores/UserStore'
import styles from '../styles/Home.module.css'

const Home: NextPage = observer((props) => {
    const store = useInjection(UserStore)

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{' '}
                    <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <CardLink
                        href="https://nextjs.org/docs"
                        title="Documentation"
                        text="Find in-depth information about Next.js features and API."
                    />

                    <CardLink
                        href="https://nextjs.org/learn"
                        title="Learn"
                        text="Learn about Next.js in an interactive course with quizzes!"
                    />

                    <CardLink
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        title="Examples"
                        text="Discover and deploy boilerplate example Next.js projects."
                    />

                    <CardLink
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        title="Deploy"
                        text="Instantly deploy your Next.js site to a public URL with Vercel."
                    />
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    )
})

export default Home
