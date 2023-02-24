import Button from "./Button"


const ButtonBox = ({ calcuDigits }) => {
    return (
        <div className="buttonBox">
            {calcuDigits.map((digit, index) => {
                return <Button key={index} digit={digit} />
            })}
        </div>
    )
}
export default ButtonBox