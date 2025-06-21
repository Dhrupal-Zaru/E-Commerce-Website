import { Link } from 'react-router-dom'
import styles from './Shop.module.css'

export default function Shop() {
    return (
        <div className={styles.shop}>
            <h1>Welcome To SHOPEE</h1>
            <p>SHOPEE is a modern and responsive e-commerce web application for browsing, searching, and managing purse products. It features dynamic search, cart management with quantity updates, and real-time price calculation.</p>
            <h4>Start to shop</h4>
            <Link to='/purse'><button>Shop Now</button></Link>
        </div>
    )
}
