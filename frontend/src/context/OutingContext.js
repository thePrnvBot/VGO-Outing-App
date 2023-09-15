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
