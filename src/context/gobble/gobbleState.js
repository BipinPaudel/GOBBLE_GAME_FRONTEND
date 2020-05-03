import React, {useReducer, useState} from 'react';
import GobbleContext from './gobbleContext';
import gobbleReducer from './gobbleReducer';
import axios from 'axios';
import {message} from 'antd';
import {withRouter} from 'react-router-dom';

import {
    ADD_WORD,
    PLAY_AGAIN,
    MAKE_GRID, SET_TIMER,
    GAME_OVER, CLEAR_WORDS
} from "../types";

const GobbleState = props => {
    const initialState = {
        words: [],
        grid: [],
        timer: {
            minutes: 0,
            seconds: 10
        },
        isGameOver: false,
        totalScore: 0,
        wordMap: {},

    };
    const [time, setTime] = useState({value: {minutes: 0, seconds: 20}})
    const [state, dispatch] = useReducer(gobbleReducer, initialState);

    //add words
    const addWord = (word) => {
        console.log("ADDING WORD " + word);
        dispatch({type: ADD_WORD, payload: word});
    };

    //clear words
    const clearWords = () => {
        console.log("CLEAR WORDS");
        dispatch({type: CLEAR_WORDS});
    };

    //build grid
    const makeGrid = async () => {
        try {
            const res = await axios.get('/v1/gobble/grid');
            dispatch({type: MAKE_GRID, payload: res.data.data});
        } catch (err) {
            message.error(err.response.data.message);
            props.history.push("/");
        }

    };

    //set timer
    const setTimer = (min, sec) => {
        console.log("set timer");
        dispatch({type: SET_TIMER, payload: {minutes: min, seconds: sec}});
    };

    //game over
    const gameOver = async (reqBody) => {
        const config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            }
        };
        try {
            const res = await axios.post('/v1/gobble', reqBody, config);
            console.log("res success " + JSON.stringify(res));
            dispatch({type: GAME_OVER, payload: res.data.data});
        } catch (err) {
            message.error(err.response.data.message);
            props.history.push("/");
            console.log("error catch" + JSON.stringify(err.response.data.message));
        }
    };

    //play Again
    const playAgain = () => {
        dispatch({type: PLAY_AGAIN});
    };

    return (
        <GobbleContext.Provider value={{
            words: state.words,
            grid: state.grid,
            timer: state.timer,
            isGameOver: state.isGameOver,
            totalScore: state.totalScore,
            wordMap: state.wordMap,
            addWord,
            makeGrid,
            setTimer,
            gameOver,
            playAgain,
            clearWords,
            setTime,
            time
        }}>
            {props.children}
        </GobbleContext.Provider>
    )
};

export default withRouter(GobbleState);