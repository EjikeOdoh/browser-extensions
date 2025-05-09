import styles from '../styles/header.module.css'

import Icon from '../assets/images/logo.svg'
import Sun from '../assets/images/icon-sun.svg'
import Moon from '../assets/images/icon-moon.svg'

export default function Header(props) {
    return (
        <header>
            <div className="icon">
                <img src={Icon} />
            </div>

            <button className={styles.themeBtn}>
                <img src={Moon} />
            </button>
        </header>
    )
}