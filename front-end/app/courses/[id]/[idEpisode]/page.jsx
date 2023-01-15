import Navigation from "../../../components/Navigation"
import styles from "/styles/Course.module.css"
import Link from "next/link"
import EpisodeIcon from "../../../components/EpisodeIcon"
import RoundedButton from "../../../components/RoundedButton"

const fetchEpisodes = ({id})=>{
    return fetch("http://192.168.0.106:5000/get_curso/"+id)
    .then(res=>res.json())
}
const fetchVideo = ({idEpisode})=>{
    return fetch("http://192.168.0.106:5000/video/"+idEpisode)
    .then(res=>res.json())
}

export default async function episodeDetail ({params}){
    const {id} = params
    const {idEpisode} = params

    const curso = await fetchEpisodes({id})
    const video = await fetchVideo({idEpisode})
    return(
        <>
            <Navigation/>
            <div className={styles.main}>
                <div className={styles.leftPart}>
                    <div className={styles.contentBlock}>
                        <div className={styles.videoContainer}>
                        <iframe src={video}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>                        
                            
                        </div>
                        <div className={styles.episodesBlock}>
                            <span>Lessons</span>
                            {
                                    curso.videos.map(episode=>(
                                        <Link href={"/courses/"+id+"/"+episode.id}>
                                            <EpisodeIcon information={episode.title} image={curso.image} ></EpisodeIcon>
                                        </Link>
                                        
                                    ))
                                }
                            </div>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.titleBlock}>
                        <span className={styles.title}>{curso.title}</span>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <p className={styles.description}>{curso.description}</p>
                    </div>
                    <div className={styles.authorBlock}>
                        <img src="https://los40.com/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg" alt="" />
                        <span>{curso.creator}</span>
                    </div>
                    <div className={styles.buttonBlockPart}>
                      <RoundedButton mensaje={"Subscribe"}></RoundedButton>  
                    </div>
                </div>

            </div>
        </>
    )
}