import styles from './Header.module.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className={styles.container}>
            <Link to="/">
                <img src={logoImg} alt="Logo cripto" />
            </Link>
        </header>
    )
}