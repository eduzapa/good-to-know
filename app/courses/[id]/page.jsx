import Navigation from "../../../components/Navigation"
import styles from "/styles/Course.module.css"
import Link from "next/link"
import EpisodeIcon from "../../../components/EpisodeIcon"
import RoundedButton from "../../../components/RoundedButton"

const fetchEpisodes = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
}

export default async function episodeDetail ({params}){
    const {id} = params
    const episodes = await fetchEpisodes()
    return(
        <>
            <Navigation/>
            <div className={styles.main}>
                <div className={styles.leftPart}>
                    <div className={styles.contentBlock}>
                        <div className={styles.videoContainer}>
                        <iframe src="https://www.youtube.com/embed/l3PcjG-rfps?autoplay=1"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>                        
                            {/* <img src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png" alt="" /> */}
                        </div>
                        <div className={styles.episodesBlock}>
                            <span>Lessons</span>
                            {
                                    (episodes.slice(0,5)).map(episode=>(
                                        <Link href={"/episodes/"+episode.id}>
                                            <EpisodeIcon information={episode.name}></EpisodeIcon>
                                        </Link>
                                        
                                    ))
                                }
                            </div>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.titleBlock}>
                        <span className={styles.title}>Titulo del curso</span>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.authorBlock}>
                        <img src="https://los40.com/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg" alt="" />
                        <span>{id}</span>
                    </div>
                    <div className={styles.buttonBlockPart}>
                      <RoundedButton mensaje={"Subscribe"}></RoundedButton>  
                    </div>
                </div>

            </div>
        </>
    )
}