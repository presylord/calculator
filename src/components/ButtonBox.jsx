import Button from "./Button"


const ButtonBox = ({ calcuDigits, handleClick }) => {
    return (
        <div className="buttonBox">
            {calcuDigits.map((digit, index) => {
                return <Button key={index} digit={digit} handleClick={handleClick} />
            })}
        </div>
    )
}
export default ButtonBox