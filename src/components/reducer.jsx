const reducer = (state, action) => {
    let temp, answer
    switch (action.type) {
        case "COMPUTE":
            if (!state.operation == "") {
                console.log("first has value")
                state.currentSession.second.push(action.payload)
                temp = (state.currentSession.second.join(''))
                state.currentSession.second = [temp]
                return { ...state, display: temp }
            } else {
                console.log("first has no value", state.currentSession)
                state.currentSession.first.push(action.payload)
                temp = (state.currentSession.first.join(''))
                state.currentSession.first = [temp]
                return { ...state, display: temp }
            }
        case "CLEAR":
            console.log('CLEAR')
            return {
                ...state, currentSession: { first: [], second: [] },
                operation: "",
                display: ""
            }
        case "ADD":
            console.log('ADD')

            return { ...state, operation: "ADD", display: "+" }
        case "SUBTRACT":
            console.log('SUBTRACT')
            return { ...state, operation: "SUBTRACT", display: "-" }
        case "MULTIPLY":
            console.log('MULTIPLY')
            return { ...state, operation: "MULTIPLY", display: "×" }
        case "DIVIDE":
            console.log('DIVIDE')
            return { ...state, operation: "DIVIDE", display: "÷" }
        case "EQUAL":
            console.log("equal")
            if (state.operation == "ADD") {
                answer = +state.currentSession.first + +state.currentSession.second
                state.currentSession = { first: [answer], second: [] }
                state.operation = ""
                console.log(state)
                return { ...state, display: answer }
            } else if (state.operation == "SUBTRACT") {
                answer = +state.currentSession.first - +state.currentSession.second
                state.currentSession = { first: [answer], second: [] }
                state.operation = ""
                console.log(state)
                return { ...state, display: answer }
            } else if (state.operation == "MULTIPLY") {
                answer = +state.currentSession.first * +state.currentSession.second
                state.currentSession = { first: [answer], second: [] }
                state.operation = ""
                console.log(state)
                return { ...state, display: answer }
            } else if (state.operation == "DIVIDE") {
                answer = +state.currentSession.first / +state.currentSession.second
                state.currentSession = { first: [answer], second: [] }
                state.operation = ""
                console.log(state)
                return { ...state, display: answer }
            }

        default:
            return { ...state }
    }
}
export default reducer