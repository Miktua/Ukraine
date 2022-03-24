import classNames from 'classnames'
import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import type { NextPage } from 'next'
import Greeting from '../components/pageHome/greeting'
import { UserStore } from '../stores/UserStore'
import s from './home.module.sass'

const Home: NextPage = observer((props) => {
    const store = useInjection(UserStore)

    return (
        <div className={classNames(s.container, s.main)}>
            <Greeting />
        </div>
    )
})

export default Home
