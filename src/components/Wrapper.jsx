import Screen from "./Screen"
import ButtonBox from "./ButtonBox"
import { useState } from "react"


const Wrapper = () => {
    const [display, setDisplay] = useState("0")
    const calcuDigits = ["c", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", " + ", "0", " . ", "="]

    const handleClick = (digit) => {
        setDisplay(digit)
    }



    return (
        <div className="wrapper">
            <Screen display={display} />
            <ButtonBox calcuDigits={calcuDigits} handleClick={handleClick} />
        </div>
    )
}
export default Wrapper