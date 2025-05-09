import styles from '../styles/button.module.css'

export default function Button(props) {
  
    return (
        <button onClick={()=>props.handleClick(props.text)} style={props.isActive ? {backgroundColor:'var(--Red-700', color:'white'} : null} className={styles.btn}>
            {props.text}
        </button>
    )
}