import styles from '../styles/card.module.css'
import Button from './Button'
import { MdToggleOff, MdToggleOn } from "react-icons/md";

import Icon from '../assets/images/logo-devlens.svg'

export default function Card(props) {



    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className="icon">
                    <img src={props.logo} />
                </div>
                <div className="texts">
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.removeBtn}>
                    Remove
                </button>
                <button onClick={()=>props.handleClick(props.name)} className={styles.toggleBtn}>
                    {
                        props.isActive ? <MdToggleOn color='green' size={50} /> : <MdToggleOff color='red' size={50} />
                    }

                </button>
            </div>
        </div>
    )
}