import styles from '../styles/Card.module.css'
import Button from './Button'
import { MdToggleOff, MdToggleOn } from "react-icons/md";

import Icon from '../assets/images/logo-devlens.svg'

export default function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <div className="icon">
                    <img src={Icon} />
                </div>
                <div className="texts">
                    <h3>Name</h3>
                    <p>Description</p>
                </div>
            </div>
            <div className="bottom">
                <Button />
                <button>
                    {
                        false ? <MdToggleOn color='green' size={24} /> : <MdToggleOff color='red' size={24} />
                    }

                </button>
            </div>
        </div>
    )
}