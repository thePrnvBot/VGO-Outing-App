import { createContext, useReducer } from "react"

export const OutingsContext = createContext()

export const outingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_OUTINGS':
            return {
                outings : action.payload
            }
        case 'CREATE_OUTING':
            return {
                outings : [action.payload, ...state.outings]
            }
        case 'DELETE_OUTING' :
            return {
                outings : state.outings.filter((w) => w._id !== action.payload._id)
            }
        case 'PATCH_OUTING' :
            // Find the index of the outing to be updated
            const outingIndex = state.outings.findIndex((outing) => outing._id === action.payload._id);

            // Create a copy of the outings array with the updated outing
            const updatedOutings = [...state.outings];
            updatedOutings[outingIndex] = action.payload;

            return {
                outings: updatedOutings
            };
        default:
            return state
    }
}

export const OutingsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(outingsReducer, {
        outings: null
    })

    return (
        <OutingsContext.Provider value={{...state, dispatch}}>
            { children }
        </OutingsContext.Provider>
    )
}
