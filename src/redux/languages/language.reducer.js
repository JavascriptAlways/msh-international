const intialState = {
    languageList: []
}

export const languageReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_LANGUAGE":
            return {
                ...state,
                languageList: action.payload
            }
        default:
            return state;
    }
}

