import styles from './CourseIcon.module.css'

export default function CourseIcon({information}){
    return(
        // <div className={styles.container}>
        //     <img src={"https://images.ecestaticos.com/tUsQqBMzVgb6yd63QjsoObsXmd0=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd53%2F5d5%2Fdb0%2Fd535d5db070fa6ecf441b32de847e756.jpg"} alt=""/>
        //     <div className={styles.textSection}>
        //         <span>{information}</span>
        //     </div>
        // </div> 
        <div className={styles.container}>
            <img src={information.image} alt=""/>
            <div className={styles.textSection}>
                <span>{information.title}</span>
            </div>
        </div>   
    )
    
}