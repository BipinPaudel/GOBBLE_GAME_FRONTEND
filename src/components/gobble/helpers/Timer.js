import React, {useContext, useEffect} from 'react'
import GobbleContext from '../../../context/gobble/gobbleContext';

const Timer = () => {

    const gobbleContext = useContext(GobbleContext);

    const {timer, setTimer, gameOver, isGameOver} = gobbleContext;

    useEffect(() => {

        const myInterval = setInterval(() => {
            const {seconds, minutes} = timer;

            if (seconds > 0) {
                setTimer(minutes, seconds - 1)
            }
            if (seconds === 0) {
                if (minutes === 0 && !isGameOver) {
                    // gameOver();
                    clearInterval(myInterval);
                }
                else
                    if (minutes===0 && isGameOver){
                    clearInterval(myInterval);
                }
                else {
                    setTimer(minutes - 1, 59)
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };

    }, [gobbleContext, timer, setTimer,isGameOver,gameOver]);


    const {minutes, seconds} = timer;
    return (
        <div>
            {minutes === 0 && seconds === 0
                ? <h1>Over!</h1>
                : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            }
        </div>
    )
};

export default Timer;