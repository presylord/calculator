const Button = ({ digit, handleClick }) => {
    return (
        <button className={digit == "=" ? "equals" : ""} onClick={() => handleClick(digit)}>{digit}</button>
    )
}
export default Button