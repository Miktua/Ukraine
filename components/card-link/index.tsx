import styles from './index.module.css'

type Props = {
    href: string
    title: string
    text: string
}

export const CardLink = ({href, title, text}: Props) => (
    <a
        href={href}
        className={styles.card}
    >
        <h2>{title} &rarr;</h2>
        <p>{text}</p>
    </a>
)