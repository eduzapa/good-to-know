export default function CourseDetail ({params}){
    const {id} = params
    return(
        <>
            <h1>Esto es el curso de {id}</h1>
        </>
    )
}