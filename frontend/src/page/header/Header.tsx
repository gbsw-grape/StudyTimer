import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>StudyTimer</h1>
            <div className={styles.signTable}>
                <Link to="/signUp" className={styles.sign}>
                    회원가입
                </Link>
                <Link to="/signIn" className={styles.sign}>
                    로그인
                </Link>
            </div>
        </div>
    )
}
export default Header