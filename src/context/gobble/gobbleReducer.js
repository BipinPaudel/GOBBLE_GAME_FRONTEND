import {
    ADD_WORD, CLEAR_WORDS, GAME_OVER,
    MAKE_GRID, PLAY_AGAIN, SET_TIMER
} from "../types";


export default (state, action)=> {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                words:[...state.words, action.payload]
            };

        case MAKE_GRID:
            return {
                ...state,
                grid: action.payload
            };

        case SET_TIMER:
            return {
                ...state,
                timer: action.payload
            };
        case GAME_OVER:
            return {
                ...state,
                isGameOver: true,
                totalScore: action.payload.totalScore,
                wordMap: action.payload.wordMap,
                grid:action.payload.grid,
            };
        case PLAY_AGAIN:
            return {
                ...state,
                isGameOver: false,

            };
        case CLEAR_WORDS:
            return {
                ...state,
                words: [],
            };
        default:
            return state;
    }
}