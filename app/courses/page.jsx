import Navigation from "../../components/Navigation"
//import '../../styles/globals.css'
import styles from  '../../styles/Courses.module.css'

const fetchCourses = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
}

export default async function Courses(){
    const courses = await fetchCourses()
    return(
        <>
            <Navigation/>
            <h1>Estamos en courses</h1>
            <section className={styles.section}>
                {(courses.slice(0, 2)).map(course=>(
                    <article key={course.id}>
                        <h2>{course.name}</h2>
                        <ul>
                            <li>Street: {course.address.street}</li>
                            <li>City: {course.address.city}</li>
                        </ul>
                    </article>
                    
                ))}
            </section>
        </>
        
        
    )
}