import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import { clearCart, getCart, getTotPrice } from '../features/Cart/cartSlice'
import CartItem from '../features/Cart/CartItem';
import BackButton from '../ui/BackButton';

export default function Cart() {
    const cart = useSelector(getCart);
    const total = useSelector(getTotPrice);
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart());
    }


    return (
        <div className={styles.cart}>
            <div className={styles.header}>
                <BackButton/>
                <h2>Cart Overview</h2>
            </div>
            {cart.length === 0 && <p className={styles.empty}>Your cart is empty</p>}
            <div className={styles.table}>
                <p>Product Image</p>
                <p>Name</p>
                <p className={styles.quantity}>Quantity</p>
                <p>Price</p>
                <p>Total Price</p>
            </div>
            <hr className={styles.separator} />
            {cart.map((item) => <CartItem item={item} key={item.id} />)}
            <div className={styles.total}>
                <p>Total Amount:</p>
                <p><strong>{total}</strong></p>
            </div>
            <div className={styles.clear}>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>

        </div>
    )
}
