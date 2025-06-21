import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import { clearCart, getCart } from '../features/Cart/cartSlice'
import CartItem from '../features/Cart/CartItem';

export default function Cart() {
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    
    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <div className={styles.cart}>
            <h2>Cart Overview</h2>
            {cart.length === 0 ?
                <p className={styles.empty}>Your cart is empty</p>
                : <>
                    <div className={styles.table}>
                        <p>Product Image</p>
                        <p>Name</p>
                        <p className={styles.quantity}>Quantity</p>
                        <p>Price</p>
                        <p>Total Price</p>
                    </div>
                    <hr className={styles.separator} />
                    {cart.map((item) => <CartItem item={item} key={item.id} />)}
                    <button onClick={handleClearCart} className={styles.clear}>Clear Cart</button>
                </>
            }

        </div>
    )
}
