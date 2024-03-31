"use client"
import Link from 'next/link';
import styles from '../../styles/navigation.module.css'
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <h2>
                <Link href='/'>Best Sellers</Link>
            </h2>
            <ul>
                <li>
                    {path === '/' ? <div className={styles.dot} /> : null}
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    {path === '/about' ? <div className={styles.dot} /> : null}
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}