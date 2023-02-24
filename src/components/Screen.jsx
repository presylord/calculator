import { useState } from "react"
import { useGlobalContext } from "./context"

const Screen = () => {
    const { display } = useGlobalContext()
    return (
        <div className="screen">{display}</div>
    )
}
export default Screen