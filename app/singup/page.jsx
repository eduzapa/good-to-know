import styles from '/styles/SingUp.module.css'

export default function SingUp (){
    return(
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    <p>Welcome</p>
                </div>
                <div className={styles.forms}>
                    <form method="post">
                        <div className={styles.formNombre} className={styles.field}>
                            <div className={styles.lableContainer}>
                                <label for="nombre">Name</label>
                                <div className={styles.fieldError} ></div>
                            </div>
                            <input type="text" className={styles.nombre} placeholder="Your name"/>
                        </div>
                        <div className={styles.formApellido} className={styles.field}>
                            <div className={styles.lableContainer}>
                                <label for="apellido">surname</label>
                                <div className={styles.fieldError} ></div>
                            </div>
                            
                            <input type="text" className={styles.apellido} placeholder="Write your surname"/>
                        </div>
                        <div className={styles.formEmail} className={styles.field}>
                            <div className={styles.lableContainer}>
                                <label for="email">E-mail</label>
                                <div className={styles.fieldError} ></div>
                            </div>
                            <input type="text" className={styles.email} placeholder="Your e-mail address"/>
                        </div>
                        <div className={styles.formDNI} className={styles.field}> 
                            <div className={styles.lableContainer} >
                                <label for="DNI">Passport</label>
                                <div className={styles.fieldError} ></div>
                            </div>
                            <input type="text" className={styles.DNI} placeholder="Write your passport"/>
                        </div>
                        <div className={styles.formPassword} className={styles.field}>
                            <div className={styles.lableContainer}>
                                <label for="password">Password</label>
                                <div className={styles.fieldError} ></div>
                            </div>
                            <input type="password" className={styles.password} placeholder="Write your password"/>
                        </div>
                        <button className={styles.singUp}>SingUp</button>
                    </form>
                </div>
                
                <div className={styles.buttons}>
                    
                    <div className={styles.logInBlock}>
                        <span>already client?</span>
                        <button className={styles.logIn}>Log in</button>
                    </div>
                </div>
            </div>
        </>
    )
}