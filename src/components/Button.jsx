import { useGlobalContext } from "./context"



const Button = ({ digit }) => {
    const { handleDigit, handleOperation, currentSession } = useGlobalContext()

    const handleClicker = () => {
        if (["+", "-", "×", "÷", "=", "c", "%", "±"].includes(digit)) {
            console.log('operation')
            return handleOperation(digit)
        } else {
            console.log('digit')
            return handleDigit(digit)
        }
    }

    return (
        <button className={digit == "=" ? "equals" : ""} onClick={handleClicker}>{digit}</button>
    )
}
export default Button