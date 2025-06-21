import { useSearch } from '../context/SearchContext'
import { data } from '../data/data'
import Item from '../features/Item/Item';
import styles from './Purse.module.css'

export default function Purse() {
    const {query} = useSearch();
    const filtered_data = data.filter((item)=> item.name.toLowerCase().includes(query.toLowerCase()))
    // console.log(filtered_data)
    return (
        <div className={styles.purse}>
            <h3>New Collections</h3>
            <ul className={styles.list}>
                {filtered_data.map((item)=> <Item key={item.id} item={item}/>)}
            </ul>
        </div>
    )
}
