import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Timer.module.css';

const Timer: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const getTimeFormatString = (time: number) => {
        const hour = Math.floor(time / 3600);
        const min = Math.floor((time % 3600) / 60);
        const sec = time % 60;
        return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    useEffect(() => {
        if (isActive) {
            setTimerId(
                setTimeout(() => {
                    setTime((prevTime) => prevTime + 1);
                }, 1000)
            );
        } else if (!isActive && timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    }, [isActive, time]);

    const startClock = () => {
        setIsActive(true);
    };

    const stopClock = () => {
        setIsActive(false);
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };

    const resetClock = () => {
        stopClock();
        setTime(0);
    };

    return (
        <>
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
            <div className={styles.stopwatch}>
                <div>
                    <h1 className={styles.time}>{getTimeFormatString(time)}</h1>
                    <div className={styles.timeBtn}>
                        <button onClick={startClock} className={styles.btn} id={styles.start}>Start</button>
                        <button onClick={stopClock} className={styles.btn} id={styles.stop}>Stop</button>
                        <button onClick={resetClock} className={styles.btn} id={styles.reset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;
