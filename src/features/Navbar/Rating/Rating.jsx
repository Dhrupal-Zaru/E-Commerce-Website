import styles from './Rating.module.css'
export default function Rating() {
    return (
        <div className={styles.rate}>
            <img src='/star.png' />
            <img src='/star.png' />
            <img src='/star.png' />
            <img src='/star.png' />
            <img src='/star-dull.png' />
        </div>
    )
}
