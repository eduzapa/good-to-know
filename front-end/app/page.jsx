import Navigation from "../components/Navigation"
import styles from '../styles/HomePage.module.css'
import CourseIcon from "../components/CourseIcon"
import Link from "next/link"
import RoundedButton from "../components/RoundedButton"


const fetchCourses = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
}
export default async function HomePage (){
    const courses = await fetchCourses()
    return (
        <>
            <Navigation/>
            <div className={styles.mainPart}>
                <div className={styles.textArea}>
                    <div>
                        <span className={styles.slogan}>Do you want </span>
                        <span className={styles.purpleSlogan}>to</span>
                        <span className={styles.slogan}> learn <br/>from your home?</span>

                    </div>
                    <p className={styles.p}>
                        With GoodToKnow you can learn any skill you want anywhere you want<br/><br/>
                        Decied the topic to learn, choose the teacher and start the course
                    </p>
                    <div className={styles.exploreButton}>
                        <Link href="/courses">
                            <RoundedButton mensaje={"Explore"}></RoundedButton>
                        </Link>
                    </div>
                    
                </div>
                <img src='/img/20944386.png' alt="" className={styles.bigImg}/>
            </div>
            <div className={styles.containerPopularCourses}>
                <div className={styles.containerTitleCourses}>
                    <span className={styles.span}>Popular Courses</span>
                    <div className={styles.popularCourses}>
                    {
                        (courses.slice(0,5)).map(course=>(
                            <Link href={"/courses/"+course.id}>
                                <CourseIcon information={course.name}></CourseIcon>
                            </Link>
                            
                        ))
                    }
                </div>
                </div>

                
            </div>
            
            
            
        </>
        

    )
}