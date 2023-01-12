import Link from "next/link"
import RoundedButton from "./RoundedButton"
import styles from './Navigation.module.css'


export default function Navigation (){
    return(
        <>
            <nav className={styles.nav}>
                <div>
                    <span className={styles.span}>Good</span>
                    <span className={styles.purpleText}>To</span>
                    <span className={styles.span}>Know</span>
                </div>
                <ul className={styles.pages}>
                    <li><Link  href="/">HomePage</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                </ul>
                <div className={styles.buttons}>
                    <div className={styles.buttonWhite} >
                        <RoundedButton mensaje={"login"} />
                    </div>
                    <div className={styles.buttonPurple}>
                        <Link href="/courses">
                            <RoundedButton mensaje={"singUp"}/>
                        </Link>
                       
                    </div>
                    
                </div>
                
            </nav>
        </>
    )
}