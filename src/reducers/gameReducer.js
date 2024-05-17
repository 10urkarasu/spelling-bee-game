import { actionTypes } from "@/helper/helper";

const initialState = {
    letters: [],
    words: [],
    points: [],
    currentWord: "",
    currentResponse: null,
    status: "loading",
    secondsRemaining: null,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_LETTERS:
            return {
                ...state,
                letters: action.payload,
                status: "ready",
            };
        case actionTypes.SET_CURRENT_WORD:
            return {
                ...state,
                currentWord: action.payload,
            };
        case actionTypes.CHECK_WORD_SUCCESS:
            return {
                ...state,
                words: [...state.words, action.payload],
                points: [...state.points, action.payload.length],
                currentResponse: true,
                currentWord: "",
                secondsRemaining: secondsRemaining + 15,
            };
        case actionTypes.CHECK_WORD_FAILURE:
            return {
                ...state,
                currentResponse: false,
            };
        case actionTypes.SET_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case actionTypes.SET_SECONDS_REMAINING:
            return {
                ...state,
                secondsRemaining: action.payload,
            };
        default:
            return state;
    }
};

export { initialState, gameReducer as default };
