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
        case "PERCENT":
            if (state.operation === "") {
                console.log('trigger')
                state.display = state.currentSession.first + "%"
                state.currentSession.first = [state.currentSession.first / 100]
            } else {
                state.display = state.currentSession.second + "%"
                state.currentSession.second = [state.currentSession.second / 100]
            }
            console.log(state)
            return { ...state }
        case "TOGGLE_SIGN":
            if (state.operation === "") {
                console.log('sign')
                state.currentSession.first = [state.currentSession.first * -1]
                state.display = state.currentSession.first
            } else {
                state.currentSession.second = [state.currentSession.second * -1]
                state.display = state.currentSession.second
            }
            console.log(state)
            return { ...state }
        case "ADD":
            if (state.currentSession.first.length) {
                return { ...state, operation: "ADD", display: "+" }

            } return { ...state }

        case "SUBTRACT":
            if (state.currentSession.first.length) {
                return { ...state, operation: "SUBTRACT", display: "-" }

            } return { ...state }
        case "MULTIPLY":
            if (state.currentSession.first.length) {
                return { ...state, operation: "MULTIPLY", display: "×" }

            } return { ...state }
        case "DIVIDE":
            if (state.currentSession.first.length) {
                return { ...state, operation: "DIVIDE", display: "÷" }
            } return { ...state }
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