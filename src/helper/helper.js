export function selectRandomElements(array, numElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}

export const actionTypes = {
    SET_LETTERS: "SET_LETTERS",
    SET_CURRENT_WORD: "SET_CURRENT_WORD",
    CHECK_WORD_SUCCESS: "CHECK_WORD_SUCCESS",
    CHECK_WORD_FAILURE: "CHECK_WORD_FAILURE",
    SET_STATUS: "SET_STATUS",
    SET_SECONDS_REMAINING: "SET_SECONDS_REMAINING",
};
