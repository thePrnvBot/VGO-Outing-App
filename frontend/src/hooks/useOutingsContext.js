import { OutingsContext } from "../context/OutingContext";
import { useContext } from "react";


export const useOutingsContext = () => {
    const context = useContext(OutingsContext)

    if (!context) {
        throw Error('useOutingsContext must be used inside an OutingsContextProvider')
    }

    return context
}