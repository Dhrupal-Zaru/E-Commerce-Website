import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data';
import styles from './Product.module.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/Cart/cartSlice';
import Rating from '../features/Rating/Rating';

export default function Product() {
    const { productId } = useParams();
    const product = data.find((item) => item.id === Number(productId));
    const dispatch = useDispatch();

    function handleAddItem() {
        dispatch(addItem(product))
    }

    return (
        <div className={styles.product}>
            <img src={product.image} alt='purse image' />
            <div className={styles.detail}>
                <h3>{product.name}</h3>
                <div className={styles.rate}>
                    <Rating />
                </div>
                <p>$ {product.price}</p>
                <button onClick={handleAddItem}>Add to Cart</button>
            </div>
        </div>
    )
}
