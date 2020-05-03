import React, {useContext, useEffect} from 'react';
import GobbleContext from "../../context/gobble/gobbleContext";

import Result from "./Result";
import Game from "./Game";

const GobblePlatform = () => {
    const gobbleContext = useContext(GobbleContext);

    const {grid,makeGrid,isGameOver,totalScore,playAgain,time,setTimer,wordMap,clearWords} = gobbleContext;

    useEffect(() => {
        makeGrid();
    }, []);


    return (
        <div>
            {!isGameOver && <Game grid={grid}/>}

            {isGameOver && <Result grid={grid}
                                   totalScore={totalScore}
                                   playAgain={playAgain}
                                   clearWords={clearWords}
                                   setTimer={setTimer}
                                   makeGrid={makeGrid}
                                   time={time}
                                   wordMap={wordMap}/>}
        </div>
    )
};

export default GobblePlatform;