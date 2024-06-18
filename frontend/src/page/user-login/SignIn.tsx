import styles from './SignIn.module.css';

const SignIn = () => {
    return (
        <div className={styles.body}>
            <div className={styles.joong}>
                <div className={styles.box}>
                    <div className={styles.header}>
                        <h2 className={styles.sexy}>로그인</h2>
                    </div>
                    <form className={styles.asd}>
                        <input type="text" name="userName" placeholder="아이디" />
                        <input type="password" name="userPassword" placeholder="비밀번호" />
                        <label htmlFor="siu" className={styles.label}>
                            <input type="checkbox" className={styles.rex} />
                            <p>아이디 저장하기</p>
                        </label>
                        <button className={styles.diaWl}><b>로그인</b></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;