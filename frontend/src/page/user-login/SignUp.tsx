import styles from './SignUp.module.css';

const SignUp = () => {

    return (
        <>
            <div className={styles.content}>
                <section className={styles.loginSection}>
                    <div className={styles.loginContainer}>
                        <h2>회원가입</h2>
                        <form className={styles.loginForm}>
                            <label htmlFor="register-username">사용자 이름</label>
                            <input type="text" className={styles.registerUsername} name="username" required />
                            <label htmlFor="register-email">이메일</label>
                            <input type="email" className={styles.registerEmail} name="email" required />
                            <label htmlFor="register-password">비밀번호</label>
                            <input type="password" className={styles.registerPassword} name="password" required />
                            <input type="submit" value="가입하기" className={styles.signInBtn} />
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default SignUp;
