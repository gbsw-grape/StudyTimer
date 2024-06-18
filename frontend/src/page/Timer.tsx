import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import Header from './header/Header';

const Timer: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    const getTimeFormatString = (time: number) => {
        const hour = Math.floor(time / 3600);
        const min = Math.floor((time % 3600) / 60);
        const sec = time % 60;
        return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval!);
        }

        return () => clearInterval(interval!);
    }, [isActive, time]);

    const startClock = () => setIsActive(true);
    const stopClock = () => setIsActive(false);
    const resetClock = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <>
            <Header />
            <div className={styles.stopwatch}>
                <div>
                    <h1 className={styles.time}>{getTimeFormatString(time)}</h1>
                    <div className={styles.timeBtn}>
                        <button onClick={startClock} className={`${styles.btn} ${styles.start}`}>Start</button>
                        <button onClick={stopClock} className={`${styles.btn} ${styles.stop}`}>Stop</button>
                        <button onClick={resetClock} className={`${styles.btn} ${styles.reset}`}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;
