import styles from './EpisodeIcon.module.css'

export default function EpisodeIcon({information, image}){
    return(
        <div className={styles.container}>
            <img src={image} alt=""/>
            <div className={styles.textSection}>
                <span>{information}</span>
            </div>
        </div>    
    )
    
}