import Navigation from "../../components/Navigation"
import Link from "next/link"
import styles from  '../../styles/Courses.module.css'
import CourseIcon from "../../components/CourseIcon"

// const fetchCourses = ()=>{
//     return fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
// }
const fetchCourses = ()=>{
    return fetch("http://192.168.0.106:5000/get_cursos")
    .then(res=>res.json())
}
export default async function Courses(){
    const courses = await fetchCourses()
    // const photo =  "https://images.ecestaticos.com/tUsQqBMzVgb6yd63QjsoObsXmd0=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd53%2F5d5%2Fdb0%2Fd535d5db070fa6ecf441b32de847e756.jpg"
    // const information ={
    //     name: "paco",
    //     imagen: photo,
    // }
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
                                    // <Link href={"/courses/"+course.name}>
                                    //     <CourseIcon information={course.name}></CourseIcon>
                                    // </Link>
                                    <Link href={"/courses/"+course.id}>
                                        <CourseIcon information={course}></CourseIcon>
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