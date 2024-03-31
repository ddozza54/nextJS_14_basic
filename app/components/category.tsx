import Link from 'next/link';
import styles from '../../styles/category.module.css'

export default function Category({ id, listName }) {
    return (
        <div key={id} className={styles.category}>
            <Link href={`/list/${id}`}>
                <h4>{listName}</h4>
            </Link>
        </div>
    )
}