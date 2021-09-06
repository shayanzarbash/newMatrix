const initState = {
    state: ""
}

function reducer(state = initState, action: any) {
    console.log(state, action);
    switch (action.type) {
        case "setRow":
            return {
                ...state,
                rows: action.payload
            }

        case "setMathOne":
            return {
                ...state,
                mstate: action.payload
            }

        case "setMathTwo":
            return {
                ...state,
                tstate: action.payload
            }
        default:
            break;
    }
    return state;
}

export default reducer;
