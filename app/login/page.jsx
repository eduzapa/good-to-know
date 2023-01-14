import styles from '/styles/Login.module.css'

export default function LogIn (){

    return(
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>Welcome</p>
                </div>
                <div className={styles.forms}>
                    <form method="post">
                        <div className={styles.formEmail}>
                            <div class="lableContainer" className={styles.contenedoremail}>
                                <label for="email">E-mail</label>
                                <div className={styles.errorEmail} class="campoError"></div>
                            </div>
                            
                            <input type="text" className={styles.email} placeholder="Your email address"/>
                        </div>
                        <div className={styles.formPassword}>
                            <div class={styles.lableContainer} >
                                <label for="password">Password</label>
                                <div className={styles.errorPassword} class="campoError"></div>
                            </div>
                            
                            <input type="password" className={styles.password} placeholder="Write your password"/>
                        </div>
                        <div className={styles.botones}>
                            <button className={styles.logIn}>Log in</button>
                        </div>
                    </form>
                    <button className={styles.registro}>Registrarse</button>
                </div>
            </div>
        </>
    )
}