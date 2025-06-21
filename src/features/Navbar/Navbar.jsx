import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import styles from './Navbar.module.css'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { getTotQty } from '../Cart/cartSlice';

export default function Navbar() {
    const { query, setQuery } = useSearch();
    const totQty = useSelector(getTotQty);

    return (
        <div className={styles.navbar}>
            <div className={styles.navleft}>
                <Link to='/' className={styles.linkReset}>
                    <div className={styles.logo}>
                        <span>🛍️</span><h1>SHOPEE</h1>
                    </div>
                </Link>
                <ul className={styles.list}>
                <Link to='/' className={styles.linkReset}><li>Shop</li></Link>
                <Link to='/purse' className={styles.linkReset}><li>Purse</li></Link>
                </ul>
            </div>
            <input type='text' placeholder='Search Product..' value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className={styles.cart}>
            <Link to='/cart' className={styles.linkReset}><span><IoCartOutline /></span></Link>{totQty > 0 && <p>{totQty}</p>}
            </div>
        </div>
    )
}
