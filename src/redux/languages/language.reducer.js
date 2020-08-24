const intialState = {
    languageList: []
}

export const languageReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_LANGUAGE_SUCCESS":
            return {
                ...state,
                languageList: action.payload
            }
        case "GET_LANGUAGE_ERROR":
            return {
                ...state,
                languageList: action.payload
            }
        default:
            return state;
    }
}

