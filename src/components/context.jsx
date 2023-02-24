import { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"

const GlobalContext = createContext()

const initialState = {
    currentSession: { first: [], second: [] },
    operation: "",
    display: ""
}

export const calcuDigits = ["c", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { currentSession, display } = state
    console.log(currentSession.first.length == 1)
    const handleDigit = (digit) => {
        dispatch({ type: "COMPUTE", payload: digit })
    }

    const handleOperation = (digit) => {
        if (digit == "+") {
            dispatch({ type: "ADD" })
        } else if (digit == "-") {
            dispatch({ type: "SUBTRACT" })
        } else if (digit == "×") {
            dispatch({ type: "MULTIPLY" })
        } else if (digit == "÷") {
            dispatch({ type: "DIVIDE" })
        } else if (digit == "=") {
            dispatch({ type: "EQUAL" })
        } else if (digit == "c") {
            dispatch({ type: "CLEAR" })
        }
    }


    return (
        <GlobalContext.Provider value={{ handleDigit, handleOperation, currentSession, display }}>{children}</GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext)