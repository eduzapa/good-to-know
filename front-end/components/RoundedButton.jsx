import styles from '../components/RoundedButton.module.css'

export default function RoundedButton({mensaje}){
    return(
        <button className={styles.button}>{mensaje}</button>
    )
}