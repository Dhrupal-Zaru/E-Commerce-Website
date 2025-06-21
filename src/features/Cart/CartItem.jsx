import { useDispatch } from 'react-redux'
import styles from './CartItem.module.css'
import { decQty, deleteItem, incQty } from './cartSlice';

export default function CartItem({ item }) {

    const dispatch = useDispatch();

    function handleInc(){
        dispatch(incQty(item.id))
    }
    
    function handleDec(){
        dispatch(decQty(item.id))
    }

    function handleDelete(){
        dispatch(deleteItem(item.id))
    }

    return (<>
        <div className={styles.cartItem}>
            <img src={item.image} alt='purse image' />
            <p>{item.name}</p>
            <div className={styles.qty}>
                <button onClick={handleDec} className={styles.btnDec}>-</button>
                <p>{item.qty}</p>
                <button onClick={handleInc}>+</button>
            </div>
            <p>{item.price}</p>
            <p>{item.totPrice}</p>
            <button onClick={handleDelete} className={styles.delete}>Delete</button>
        </div>
        <hr className={styles.separator} />

    </>
    )
}
