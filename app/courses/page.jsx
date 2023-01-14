import Navigation from "../../components/Navigation"
import Link from "next/link"
import styles from  '../../styles/Courses.module.css'
import CourseIcon from "../../components/CourseIcon"

const fetchCourses = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
}

export default async function Courses(){
    const courses = await fetchCourses()
    return(
        <>
            <Navigation/>
            <div className={styles.mainPart}>
                <div className={styles.leftPart}>
                    <div className={styles.lateralBar}>
                        <div className={styles.filter}>
                            <span className={styles.titleFilter}>Category</span>
                            <ul>
                                <li><input type="checkbox"/><label>IT</label></li>
                                <li><input type="checkbox"/><label>Finance</label></li>
                                <li><input type="checkbox"/><label>Science</label></li>
                                <li><input type="checkbox"/><label>Languajes</label></li>
                            </ul>
                        </div>
                        <div className={styles.filter}>
                            <span className={styles.titleFilter}>Subscription</span>
                            <ul>
                                <li><input type="checkbox"/><label>Gratuita</label></li>
                                <li><input type="checkbox"/><label>Premium</label></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    
                    <div className={styles.containerCourses}>
                        <div className={styles.courses}>
                            <span className={styles.titleGrid}>Results</span>
                            {
                                courses.map(course=>(
                                    <Link href={"/courses/"+course.name}>
                                        <CourseIcon information={course.name}></CourseIcon>
                                    </Link>
                                    
                                ))
                            }
                        </div>
                    </div>
                
                </div>
                
            </div>
            
        </>
        
        
    )
}