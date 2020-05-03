import React, {useContext, useEffect, useRef} from 'react';
import {Col,Tag,Row} from "antd";

import Timer from "./helpers/Timer";
import Alerts from "../layout/Alerts";
import GobbleContext from "../../context/gobble/gobbleContext";
import AlertContext from "../../context/alert/alertContext";
import Grid from "./helpers/Board";

const Game = (props) => {
    const gobbleContext = useContext(GobbleContext);
    const alertContext = useContext(AlertContext);

    const {words, addWord, isGameOver, timer,clearWords,gameOver} = gobbleContext;

    const {grid}= props;

    const word = useRef('');

    useEffect(() => {
        if (timer.minutes===0 && timer.seconds===0) {
            gameOver({inputWords:words,grid:grid});
            clearWords();
        }
    }, [timer]);

    const onChange = (e) => {
        [e.target.name] = e.target.value;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (word.current.value) {

            if (word.current.value.length < 3) {
                alertContext.setAlert("Word length cannot be less than 3", "danger");
                return;
            }

            if (words.includes(word.current.value)){
                alertContext.setAlert("Word already played","danger");
                return;
            }

            if (!/^[a-zA-Z]+$/.test(word.current.value)){
                alertContext.setAlert("Only alphabetic characters are allowed","danger");
                return;
            }

        } else {
            alertContext.setAlert("Please enter a word to add", "danger");
            return;
        }
        addWord(word.current.value.toLowerCase());
        word.current.value = '';
    };

    return (

        <div className='grid-2'>
            <div>
                <Timer/>
                <Grid grid={grid}/>
                <div>
                    <Alerts/>
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            placeholder='Add word...'
                            ref={word}
                            onChange={onChange}
                        />
                        <button type='submit' className="btn btn-light btn-block">
                            Add
                        </button>
                    </form>
                </div>
            </div>

            <div>
                {/*    input words goes here */}
                <h2>The words will be displayed here.</h2>
                <div className={'word-display'}>
                    <ul>
                    {words.map(word =><li style={{marginTop:'20px',textAlign:'center'}} key={word}>
                        <Tag  color="#2db7f5" > {word}  </Tag>
                    </li>) }
                    </ul>
                </div>
            </div>
        </div>

    )


};

export default Game;