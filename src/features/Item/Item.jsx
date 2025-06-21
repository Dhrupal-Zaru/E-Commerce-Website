import { Link } from 'react-router-dom'
import styles from './Item.module.css'
import Rating from '../Rating/Rating'

export default function Item({ item }) {
    return (
        <div className={styles.item}>
            <Link to={`/product/${item.id}`} className={styles.linkReset}>
                <img src={item.image} alt='purse image' />
                <h2>{item.name}</h2>
                <div className={styles.rating}>
                    <Rating />
                </div>
                <p>${item.price}</p>
            </Link>
        </div>
    )
}
