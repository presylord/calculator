import Screen from "./Screen"
import ButtonBox from "./ButtonBox"
import { useGlobalContext, calcuDigits } from "./context"


const Wrapper = () => {


    return (
        <div className="wrapper">
            <Screen />
            <ButtonBox calcuDigits={calcuDigits} />
        </div>
    )
}
export default Wrapper