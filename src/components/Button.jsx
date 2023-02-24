import { useGlobalContext } from "./context"



const Button = ({ digit }) => {
    const { handleDigit, handleOperation, currentSession } = useGlobalContext()

    return (
        <button className={digit == "=" ? "equals" : ""} onClick={["+", "-", "×", "÷", "=", "c"].includes(digit) ? () => handleOperation(digit) : () => handleDigit(digit)}>{digit}</button>
    )
}
export default Button